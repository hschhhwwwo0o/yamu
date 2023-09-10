"use client";

import React, { Fragment } from "react";

/** Components */
import { TheTopNavigation } from "@/components/shared/TheTopNavigation";
import { Button } from "@/components/form/Button";
import { Switch } from "@/components/form/Switch";
import { ExitButton } from "@/components/form/ExitButton";
import { Select } from "@/components/form/Select";

/** Hooks */
import { useSelect } from "@/hooks/form/useSelect";
import { useSwitch } from "@/hooks/form/useSwitch";

export default function IndexScreen(): React.JSX.Element {
  const deviceSelect = useSelect({
    options: [
      {
        label: "iPhone 13",
        value: "iPhone 13",
      },
      {
        label: "iPhone 14",
        value: "iPhone 14",
      },
    ],
  });
  const switchInput = useSwitch({
    title: "Title",
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    defaultValue: false,
  });

  return (
    <Fragment>
      <main>
        <TheTopNavigation />
        <Button>Create</Button>
        <Switch {...switchInput} />
        <ExitButton>Text</ExitButton>
        <Select {...deviceSelect} />
      </main>
    </Fragment>
  );
}
