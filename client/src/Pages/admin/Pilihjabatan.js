import React, { useState } from 'react';
import Select from 'react-select';
import './Pilihjabatan.css';
import leveljabatan from '../../Assets/leveljabatan.bmp';

// import { colourOptions } from '../data';

const options = [
  { value: 'blues', label: 'Blues' },
  { value: 'rock', label: 'Rock' },
  { value: 'jazz', label: 'Jazz' },
  { value: 'orchestra', label: 'Orchestra' },
];

export default () => {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  return (
    <>
      <div className="containerlevel">
        <div className="row">
          <div className="col-sm-6">
            <a>
              <img className="bg" src={leveljabatan} />
            </a>
          </div>
          <div className="col-sm-6">
            <div className="selectlevel">
              <p className="mb-2">
                Proyeksi Penempatan/Level Jabatan
              </p>
              <Select
                id="selectleveljabatan"
                className="basic-single"
                classNamePrefix="select"
                // defaultValue={colourOptions[0]}
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                options={options}
                placeholder="Pilih Jabatan"
              />
              <div className="btn-level">
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="selectlevelhpscreen">
        <h1 className="mb-3">Proyeksi Penempatan/Level Jabatan</h1>
        <Select
          className="basic-single"
          classNamePrefix=""
          // defaultValue={colourOptions[0]}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={isClearable}
          isRtl={isRtl}
          isSearchable={isSearchable}
          name="color"
          options={options}
          placeholder="Pilih Jabatan"
        />
        <div className="btn-level">
          <button type="button" class="btn btn-danger btn-sm">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
