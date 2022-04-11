import { SearchIcon } from '@heroicons/react/outline';

export default function Search(props) {
  const { value, onChange } = props;

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex w-full items-center rounded-2xl border border-zinc-600 text-zinc-800">
      <span className="pl-3 pr-2">
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
