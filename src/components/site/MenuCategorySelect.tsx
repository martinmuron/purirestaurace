"use client";

type OptionGroup = {
  label: string;
  options: { id: string; title: string }[];
};

type Props = {
  id: string;
  label: string;
  groups: OptionGroup[];
};

export function MenuCategorySelect({ id, label, groups }: Props) {
  const onChange = (value: string) => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document
      .getElementById(value)
      ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    window.history.replaceState(null, "", `#${value}`);
  };

  return (
    <div className="menu-select">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        defaultValue={groups[0]?.options[0]?.id ?? ""}
        onChange={(event) => onChange(event.target.value)}
      >
        {groups.map((group) => (
          <optgroup key={group.label} label={group.label}>
            {group.options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.title}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}
