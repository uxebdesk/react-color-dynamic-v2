import React, { useState, useEffect } from 'react';
import { COLORS_GROUP, COLORS_HUE_LEVEL } from './config/color.config';

const Colors = () => {
  const [theme, setTheme] = useState({ mode: 'light' });
  const colorScheme = [
    'orange-soda',
    'emerald-wave',
    'byzantine-blue',
    'blue-opulence',
    'blaze-orange',
    'blaze-orange2',
    'military1',
    'military2',
  ];
  /** First init */
  useEffect(() => {
    document.documentElement.setAttribute('theme', 'mimiti');
    document.documentElement.setAttribute('theme-mode', 'light');
    document.body.setAttribute('theme-color', 'orange-soda');
    document.documentElement.setAttribute('theme-fontsize', 'medium');

    setTimeout(() => {
      document.body.setAttribute('theme-shape', 'rounded');
      document.body.classList.add('eui', 'theme');
    }, 1000);
  }, []);

  const onChangeColorScheme = (e) => {
    document.body.setAttribute('theme-color', e.target.value);
  };

  const onChangeToggleTheme = (th) => {
    setTheme({ ...theme, mode: th });
    document.documentElement.setAttribute('theme-mode', th);
  };

  return (
    <div className="mt-2">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Colors Preview
          </a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mb-2 mb-md-0">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
             */}
            </ul>
            <form
              className="d-flex ms-auto"
              data-dashlane-rid="10849129c5b1bbed"
              data-form-type=""
            >
              <select
                onChange={(e) => onChangeColorScheme(e)}
                className="browser-default custom-select"
              >
                {colorScheme.map((scheme, key) => (
                  <option value={scheme}>{scheme}</option>
                ))}
              </select>
              <div
                className="btn-group ms-3"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className={`btn ${
                    theme.mode === 'light'
                      ? 'btn-primary'
                      : 'btn-outline-primary'
                  }`}
                  onClick={(e) => onChangeToggleTheme('light')}
                >
                  light
                </button>
                <button
                  type="button"
                  className={`btn ${
                    theme.mode === 'dark'
                      ? 'btn-primary'
                      : 'btn-outline-primary'
                  }`}
                  onClick={(e) => onChangeToggleTheme('dark')}
                >
                  Dark
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
      <hr style={{ marginBottom: '4rem' }} />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            {COLORS_GROUP.map((group, i) => {
              return (
                <div className="mb-4" key={`group` + i}>
                  <h4 className="text-capitalize mb-1">{group.name}</h4>
                  <p className="text-muted mb-4">
                    {' '}
                    <span className="text-capitalize">{group.name}</span> color
                    design system generator and preview
                  </p>

                  <div
                    className={`color mb-4 ${
                      group.name === 'black' ? 'd-none' : ''
                    }`}
                  >
                    <div className="grid grid--fit">
                      {group.colors.map((color, i) => {
                        return (
                          <div className="col">
                            <div
                              className="color-hue text-capitalize py-4"
                              style={{
                                background: `var(--${color}-500)`,
                                color: `var(--${color}-500-cc)`,
                              }}
                            >
                              {color}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {group.colors.map((color, i) => {
                    return (
                      <div className="color">
                        {color !== 'black' && (
                          <p className="text-muted text-small mt-3 mb-0 text-capitalize">
                            {color} color hue
                          </p>
                        )}
                        <div className="grid grid--fit">
                          {COLORS_HUE_LEVEL.map((level, i) => {
                            return (
                              <div className="col">
                                <div
                                  className={
                                    color === 'black'
                                      ? `color-hue py-4`
                                      : `color-hue`
                                  }
                                  style={{
                                    background: `var(--${color}-${level})`,
                                    color: `var(--${color}-${level}-cc)`,
                                  }}
                                >
                                  {level}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;
