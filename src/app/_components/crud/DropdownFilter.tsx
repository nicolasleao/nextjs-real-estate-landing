import React, { useState, useEffect } from "react";
import { Dropdown, CustomFlowbiteTheme } from 'flowbite-react';

interface DropdownItem {
  label: string,
  value: string | null,
}

interface DropdownFilterProps {
  placeholder: string,
  items: DropdownItem[],
  onFilter: any,
  initialValue?: string | null,
}

const customTheme: CustomFlowbiteTheme['dropdown'] = {
    inlineWrapper: "flex items-center text-white bg-gray-500 py-2 px-5 rounded"
}

export default function DropdownFilter({ placeholder, items, onFilter, initialValue }: DropdownFilterProps) {
  const [currentValue, setCurrentValue] = useState<string | null>(null);

  const updateCurrentValue = (value: string | null) => {
    const item = items.find(i => i.value == value)
    if (item)
      setCurrentValue(item.label);
  }

  const handleSelectItem = (value: string | null) => {
    onFilter(value);
    updateCurrentValue(value);
  }

  useEffect(() => {
    updateCurrentValue(initialValue ?? null);
  }, [initialValue]);

  return (
    <Dropdown theme={customTheme} label={currentValue ? currentValue : placeholder} size="sm" dismissOnClick inline>
      {items.map(item => (
        <Dropdown.Item
          key={item.value}
          onClick={() => handleSelectItem(item.value)}
        >
          {item.label}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
}
