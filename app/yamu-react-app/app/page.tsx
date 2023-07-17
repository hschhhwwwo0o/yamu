"use client";

import React, { useEffect } from "react";

import { MockUpGenerator } from "@module/mock-up-generator";
import { MockUpHTMLRenderer } from "@module/mock-up-html-renderer";

export default function IndexScreen() {
  const mockUpGenerator = new MockUpGenerator();
  const mockUpHTMLRenderer = new MockUpHTMLRenderer("mock-up-container");

  useEffect(function () {
    mockUpGenerator.selectDevice("iPhone 14 Pro");
    mockUpGenerator.mockUp.device.changeSettings({
      isSystemBar: true,
      theme: "dark",
    });
  }, []);

  useEffect(function () {
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
  }, []);

  return (
    <div className="w-[100vw] flex flex-col items-center justify-center pt-10">
      <div id="mock-up-container" />
      <div className="w-[100vw] flex items-center justify-center py-6">
        <button
          onClick={() => {
            mockUpHTMLRenderer.download("png");
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
}
