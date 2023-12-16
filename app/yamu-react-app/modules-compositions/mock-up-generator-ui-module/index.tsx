/** Views */
import { MockUpPreview } from "./components/MockUpPreview";
import { MockUpSettingsWizard } from "./components/MockUpSettingsWizard";

/** Utils */
import { _init } from "./utils/init";
import { _clear } from "./utils/clear";

const MockUpGeneratorUIModule = {
  view: {
    MockUpPreview,
    MockUpSettingsWizard,
  },
  utils: {
    init: _init,
    clear: _clear,
  },
};

export { MockUpGeneratorUIModule };
