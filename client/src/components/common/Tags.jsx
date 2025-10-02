import TagItem from './TagItem';

function Tags() {
  const tags = [
    { name: 'Work', color: 'primary' },
    { name: 'Personal', color: 'primary' },
    { name: 'Finance', color: 'blue' },
    { name: 'Travel', color: 'purple' },
    { name: 'Ideas', color: 'amber' },
  ];

  return (
    <>
      <h3 className="text-xl font-bold mb-4">Tags</h3>
      <div className="rounded-lg bg-surface-light dark:bg-surface-dark p-6 shadow-custom-light dark:shadow-custom-dark">
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <TagItem key={index} {...tag} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Tags;