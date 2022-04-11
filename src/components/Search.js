import { SearchIcon } from '@heroicons/react/outline';

export default function Search(props) {
  const { value, onChange } = props;

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex w-11/12 items-center rounded-md border border-zinc-600 text-zinc-800 lg:w-4/12">
      <span className="px-2">
        <SearchIcon className="h-6 w-6 text-zinc-50" />
      </span>
      <input
        className="w-full rounded-r-md bg-transparent p-2 text-zinc-50 focus:outline-none"
        placeholder="Search photo"
        value={value ?? ''}
        onChange={handleChange}
      />
    </div>
  );
}
