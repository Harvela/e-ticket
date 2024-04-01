/* eslint-disable import/no-named-as-default */
import type { NextPageContext } from 'next';
import React from 'react';

import type { LanguageDescriptor } from './hooks';
import useLanguageSwitcher from './hooks';

export type LanguageSwitcherProps = {
  context?: NextPageContext;
};

export const LanguageSwitcher = ({ context }: LanguageSwitcherProps = {}) => {
  const { currentLanguage, switchLanguage, languageConfig } =
    useLanguageSwitcher({ context });

  if (!languageConfig) {
    return null;
  }

  return (
    <div className="notranslate  text-center ">
      {languageConfig.languages.map((ld: LanguageDescriptor, _i: number) => (
        <React.Fragment key={`l_s_${ld}`}>
          {currentLanguage === ld.name ||
          (currentLanguage === 'auto' &&
            languageConfig.defaultLanguage === ld.name) ? (
            <span className="mx-3 rounded-[5px] bg-primary-200 px-[5px] py-[2px] text-blue">
              {ld.title}
            </span>
          ) : (
            <a
              onClick={switchLanguage(ld.name)}
              className="mx-3 cursor-pointer text-white hover:underline"
            >
              {ld.title}
            </a>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguageSwitcher;