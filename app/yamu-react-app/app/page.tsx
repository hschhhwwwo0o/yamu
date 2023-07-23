"use client";

import React, { useEffect, useMemo, useState } from "react";

import { MockUpGenerator, SettingListItem } from "@module/mock-up-generator";
import { MockUpHTMLRenderer, RenderData } from "@module/mock-up-html-renderer";

export default function IndexScreen() {
  const mockUpGenerator = useMemo(() => new MockUpGenerator(), []);
  const mockUpRenderer = useMemo(
    () => new MockUpHTMLRenderer("mock-up-container"),
    [],
  );

  const [selectedDeviceName, setSelectedDeviceName] =
    useState<string>("iWatch SE");

  const [settingsList, setSettingsList] = useState<SettingListItem[]>([]);
  const [settings, setSettings] = useState<any>({});

  useEffect(
    function onSelectDeviceAndRenderEffect(): void {
      mockUpGenerator.selectDevice(selectedDeviceName);
      const mockUp = mockUpGenerator.mockUp;
      const settingsList = mockUp.device.getSettingsList();
      setSettingsList(settingsList);
      setSettings({});
      const renderData: RenderData = {
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

  useEffect(() => {
    const mockUp = mockUpGenerator.mockUp;
    mockUp.device.changeSettings(settings);
    const renderData: RenderData = {
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
  }, [settings]);

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
        <div>
          {settingsList.map((setting) => {
            if (setting.type === "switch") {
              return (
                <div key={setting.key}>
                  {setting.key}
                  <input
                    defaultChecked={settings[setting.key]}
                    checked={settings[setting.key] ? true : false}
                    value={settings[setting.key]}
                    type="checkbox"
                    onChange={(e) => {
                      setSettings({
                        ...settings,
                        [`${setting.key}`]:
                          e.target.value === "on" || e.target.value === "false"
                            ? true
                            : false,
                      });
                    }}
                    name={setting.key}
                    id={setting.key}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
      <div id="mock-up-container" />
      <div className="w-[100vw] flex items-center justify-center py-6">
        <button onClick={downloadMockUp}>Download mock-up</button>
      </div>
    </div>
  );
}
