import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { booleanRouterMeteData } from '../Js/Boolean/router-data';
import { jsNumbersRouterMeteData } from '../Js/JsNumbers/router-data';
import { mathRouterMeteData } from './Math/router-data';
import { jsNumbersTrainingRouterMeteData } from './JsNumbersTraining/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  booleanRouterMeteData,
  jsNumbersRouterMeteData,
  mathRouterMeteData,
  jsNumbersTrainingRouterMeteData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
