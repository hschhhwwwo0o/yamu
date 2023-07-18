"use client";

import React, { useEffect, useState } from "react";

import { MockUpGenerator } from "@module/mock-up-generator";
import { MockUpHTMLRenderer } from "@module/mock-up-html-renderer";

export default function IndexScreen() {
  const mockUpGenerator = new MockUpGenerator();
  const mockUpHTMLRenderer = new MockUpHTMLRenderer("mock-up-container");

  const [selectedDeviceName, setSelectedDeviceName] =
    useState<string>("iWatch SE");

  useEffect(
    function () {
      mockUpGenerator.selectDevice(selectedDeviceName);
      mockUpHTMLRenderer.render({
        frameWidth: mockUpGenerator.mockUp.device.width,
        frameHeight: mockUpGenerator.mockUp.device.height,
        frameImage: mockUpGenerator.mockUp.device.frameImage,
        insertedImage: mockUpGenerator.mockUp.insertedImage,
        paddingsInPercents: {
          paddingTop:
            mockUpGenerator.mockUp.device.deviceLibraryItem.paddingsInPercents
              .paddingTop,
          paddingLeft:
            mockUpGenerator.mockUp.device.deviceLibraryItem.paddingsInPercents
              .paddingLeft,
          paddingBottom:
            mockUpGenerator.mockUp.device.deviceLibraryItem.paddingsInPercents
              .paddingBottom,
          paddingRight:
            mockUpGenerator.mockUp.device.deviceLibraryItem.paddingsInPercents
              .paddingRight,
        },
      });
    },
    [selectedDeviceName],
  );

  async function downloadMockUp(): Promise<void> {
    await mockUpHTMLRenderer.download("png");
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
