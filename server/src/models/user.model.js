const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // --- CORE IDENTITY & LOGIN ---
    username: {
      type: String,
      required: [true, "Username is required."],
      unique: true,
      trim: true,
      lowercase: true,
      // Regex to ensure username is simple: alphanumeric, underscores, hyphens
      match: [
        /^[a-zA-Z0-9_-]+$/,
        "Username can only contain letters, numbers, underscores, and hyphens.",
      ],
      minlength: [3, "Username must be at least 3 characters long."],
      maxlength: [20, "Username cannot be more than 20 characters long."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      trim: true,
      lowercase: true,
      // A standard, robust regex for email validation
      match: [/\S+@\S+\.\S+/, "Please use a valid email address."],
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      minlength: [8, "Password must be at least 8 characters long."],
      // The 'select: false' is a CRITICAL security feature.
      // It means this field will NOT be sent back in any query by default.
      // You have to explicitly ask for it, e.g., User.findOne().select('+password')
      // select: false,
    },

    // --- USER PROFILE & METADATA ---
    avatarUrl: {
      type: String,
      default: "", // We can generate a default avatar later
    },

    // What kind of developer are they? Helps with personalization.
    // We can ask this during onboarding.
    specialization: {
      type: String,
      enum: [
        "frontend",
        "backend",
        "fullstack",
        "data-science",
        "devops",
        "mobile",
        "other",
        "",
      ],
      default: "",
    },

    // --- APPLICATION SETTINGS & PREFERENCES ---
    settings: {
      theme: {
        type: String,
        enum: ["light", "dark", "system"],
        default: "system",
      },
      // Other settings could go here: default model, notifications, etc.
    },

    // --- FUTURE-PROOFING & ADVANCED FEATURES ---
    // For V2/V3: if you want to offer a paid tier
    accountTier: {
      type: String,
      enum: ["free", "pro", "enterprise"],
      default: "free",
    },

    // For V2/V3: if you want to let users access their vault via an API
    apiKey: {
      hash: { type: String, select: false }, // Store a HASH of the API key, not the key itself
      lastFour: String, // Store the last 4 characters to display to the user
    },

    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true, // createdAt, updatedAt
    // This enables virtuals to be included when you convert a document to JSON
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// --- VIRTUALS ---
// A 'virtual' is a property that is NOT stored in the database.
// It's calculated on the fly. Here we can use it to get the user's prompts.
userSchema.virtual("prompts", {
  ref: "Prompt",
  localField: "_id",
  foreignField: "author",
});

// --- MIDDLEWARE (THE POWER OF MONGOOSE) ---

// 1. Password Hashing Middleware:
// This function runs automatically BEFORE a new user document is saved.
// userSchema.pre("save", async function (next) {
//   // Only run this function if password was actually modified
//   if (!this.isModified("password")) return next();

//   // Hash the password with a cost of 12 (a good standard)
//   this.password = await bcrypt.hash(this.password, 12);

//   next();
// });

// 2. 'passwordChangedAt' Middleware:
// This runs before saving if the password has been modified.
userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  // Subtracting 1 second ensures the token is always created AFTER the password is changed
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

// --- INSTANCE METHODS ---
// These are methods available on every document created from this model.

// 1. Compare Passwords during Login:
// userSchema.methods.correctPassword = async function (
//   candidatePassword,
//   userPassword
// ) {
//   return await bcrypt.compare(candidatePassword, userPassword);
// };

// 2. Check if Password was Changed After Token was Issued:
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    // True if password was changed after the token was issued
    return JWTTimestamp < changedTimestamp;
  }
  // False means NOT changed
  return false;
};

// 3. Create Password Reset Token:
// (You'll implement this logic later, but the structure is here)
userSchema.methods.createPasswordResetToken = function () {
  // Logic to create a token, hash it, set expiry, and save to the user document
  // ...
};

const User = mongoose.model("User", userSchema);
module.exports = User;
