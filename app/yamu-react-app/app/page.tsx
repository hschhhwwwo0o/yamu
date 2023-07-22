"use client";

import React, { useEffect, useState } from "react";

import { MockUpGenerator } from "@module/mock-up-generator";
import { MockUpHTMLRenderer } from "@module/mock-up-html-renderer";

export default function IndexScreen() {
  const mockUpGenerator = new MockUpGenerator();
  const mockUpRenderer = new MockUpHTMLRenderer("mock-up-container");

  const [selectedDeviceName, setSelectedDeviceName] =
    useState<string>("iWatch SE");

  useEffect(
    function onSelectDeviceAndRenderEffect(): void {
      mockUpGenerator.selectDevice(selectedDeviceName);
      const mockUp = mockUpGenerator.mockUp;
      const renderData = {
        frameWidth: mockUp.device.frame.width,
        frameHeight: mockUp.device.frame.height,
        frameImage: mockUp.device.frame.image,
        insertedImage: mockUp.insertedImage || "",
        paddingsInPercents: {
          top: mockUp.device.frame.paddingsInPercents.top,
          left: mockUp.device.frame.paddingsInPercents.left,
          bottom: mockUp.device.frame.paddingsInPercents.bottom,
          right: mockUp.device.frame.paddingsInPercents.right,
        },
      };
      mockUpRenderer.render(renderData);
    },
    [selectedDeviceName],
  );

  async function downloadMockUp(): Promise<void> {
    await mockUpRenderer.download("png");
  }

  function selectDevice(event: React.ChangeEvent<HTMLSelectElement>): void {
    setSelectedDeviceName(event.target.value);
  }

  return (
    <div className="w-[100vw] flex flex-col items-center justify-center pt-10">
      <div className="py-2">
        <select
          onChange={selectDevice}
          name="select-device-mock-up"
          id="select-device-mock-up"
        >
          <option value="iWatch SE">iWatch SE</option>
          <option value="iPhone 13">iPhone 13</option>
          <option value="iPhone 14 Pro">iPhone 14 Pro</option>
        </select>
      </div>
      <div id="mock-up-container" />
      <div className="w-[100vw] flex items-center justify-center py-6">
        <button onClick={downloadMockUp}>Download mock-up</button>
      </div>
    </div>
  );
}
