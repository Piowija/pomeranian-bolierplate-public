import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactOnClickRouterMetaData } from './ReactOnClick/router-data';
import { materialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickRouterMetaData,
  materialUIBasicElementsMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
