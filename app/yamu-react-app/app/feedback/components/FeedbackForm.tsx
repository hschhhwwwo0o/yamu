"use client";

import React, { Fragment } from "react";

/** Components */
import { Textarea, useTextarea } from "@/components/form/Textarea";
import { Button } from "@/components/form/Button";

export function FeedbackForm() {
  const feedbackTextarea = useTextarea({
    title: "Enter feedback",
  });

  return (
    <Fragment>
      <span className="block">
        <span className="block">
          <Textarea {...feedbackTextarea} />
        </span>
        <span className="block mt-3">
          <Button label="By submitting feedback you will help make the product better">
            Create feedback
          </Button>
        </span>
      </span>
    </Fragment>
  );
}
