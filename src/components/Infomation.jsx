import React from 'react';
import map from 'lodash/map';
import HOCToast from '../HOC/HOCToast';
import { host } from '../constants';
import Card from '../commons/Card';
import Checkbox from '../commons/Checkbox';
import Modal from '../commons/Modal';
import InfomationStyle from './InfomationStyle';
import Input from '../commons/Input';
import Select from '../commons/Select';
import { messages, cityList } from '../mockData/db';

const regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

class Infomation extends React.PureComponent {
  constructor(props) {
    super(props);
    const { store } = this.props;

    this.state = {
      file: null,
      url: store.logoUrl,
      message: messages[0].id,
      city: store.city,
      district: store.district,
      invoiceCity: store.redInvoive.city,
      invoiceDistrict: store.redInvoive.district,
      districtArray: cityList.find(c => c.city === store.city).district,
      inDistrictArray: cityList.find(c => c.city === store.redInvoive.city).district,
      error: null,
      open: false,
    };

    this.defaultAvatar = store.logoUrl;
  }

  componentWillReceiveProps(nextProps) {
    const { loading } = this.props;
    if (loading && loading !== nextProps.loading) {
      this.turnOffModal();
    }
  }

  changeDistrict = (district, type) => {
    if (type) {
      return this.setState({ invoiceDistrict: district });
    }
    return this.setState({ district });
  }

  changeCity = (city, type) => {
    if (type) {
      return this.setState({
        invoiceCity: city,
        invoiceDistrict: '',
        inDistrictArray: cityList.find(c => c.city === city).district,
      });
    }
    return this.setState({
      city,
      district: '',
      districtArray: cityList.find(c => c.city === city).district,
    });
  }

  updateMessage = (id) => {
    this.setState({ message: id });
  }
  
  turnOffModal = () => {
    this.setState({ open: false });
  }

  toggleModal = () => {
    this.setState({ open: !this.state.open });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;

    if (!phone.match(regex)) {
      return this.setState({ error: 'Phone is incorrect format' });
    }

    const data = new FormData();
    data.append('id', this.props.store.id);
    data.append('name', e.target.name.value);
    data.append('address', e.target.address.value);
    data.append('district', e.target.district.value);
    data.append('city', e.target.city.value);
    data.append('phone', e.target.phone.value);
    data.append('rName', e.target.rName.value);
    data.append('rAddress', e.target.rAddress.value);
    data.append('rDistrict', e.target.rDistrict.value);
    data.append('rCity', e.target.rCity.value);
    data.append('taxCode', e.target.taxCode.value);
    if (this.state.file) {
      data.append('file', this.state.file);
    } else {
      data.append('logoUrl', this.state.url);
    }
    return this.props.updateStore(data);
  }

  onChangeAvartar = (e) => {
    const that = this;
    this.setState({
      file: e.target.files[0],
    });

    const fr = new FileReader();
    fr.onload = function () {
      that.setState({
        src: fr.result,
      });
    }
    fr.readAsDataURL(e.target.files[0]);
  }

  resetLogoUrl = () => {
    this.setState({
      url: this.defaultAvatar,
      file: null,
      src: '',
    });
  }

  render() {
    const {
      message, open, districtArray, district, city,
      inDistrictArray, invoiceCity, invoiceDistrict,
      file, src, error,
    } = this.state;

    const { store } = this.props;

    return (
      <InfomationStyle>
        <div className="info-item">
          <Card data={store} edit={this.toggleModal} />
        </div>
        <div className="delivery-message">
          <div className="default-message">
            <h5 className="delivery-title">DELIVERY DEFAULT MESSAGE</h5>
            {map(messages, ({ id, label }) => (
              <div className="message" key={id}>
                <Checkbox
                  name={id}
                  id={id}
                  checked={message === id}
                  label={label}
                  onChange={() => this.updateMessage(id)}
                />
              </div>
            ))}
            <button className="update-message">Update</button>
          </div>
        </div>
        {open && (
          <Modal id="edit-store" toggle={this.toggleModal}>
            <div className="edit-form">
              <div className="form-header">
                <p className="form-title">
                  <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="pencil-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-pencil-alt fa-w-16 fa-2x">
                    <path fill="currentColor" d="M493.255 56.236l-37.49-37.49c-24.993-24.993-65.515-24.994-90.51 0L12.838 371.162.151 485.346c-1.698 15.286 11.22 28.203 26.504 26.504l114.184-12.687 352.417-352.417c24.992-24.994 24.992-65.517-.001-90.51zM164.686 347.313c6.249 6.249 16.379 6.248 22.627 0L368 166.627l30.059 30.059L174 420.745V386h-48v-48H91.255l224.059-224.059L345.373 144 164.686 324.687c-6.249 6.248-6.249 16.378 0 22.626zm-38.539 121.285l-58.995 6.555-30.305-30.305 6.555-58.995L63.255 366H98v48h48v34.745l-19.853 19.853zm344.48-344.48l-49.941 49.941-82.745-82.745 49.941-49.941c12.505-12.505 32.748-12.507 45.255 0l37.49 37.49c12.506 12.506 12.507 32.747 0 45.255z" className=""></path>
                  </svg>
                  EDIT STORE PROFILE
                </p>
              </div>
              <div className="form-body">
                <div className="form-body__left">
                  <p className="form-body__left__title">STORE IMAGE</p>
                  <img src={file ? src : `${host}${store.logoUrl}`} alt={store.id} />
                  <div className="edit-image">
                    <label htmlFor="select-image">
                      Upload Image
                    </label>
                    <input
                      type="file"
                      name="select-image"
                      id="select-image"
                      accept="image/*"
                      onChange={this.onChangeAvartar} />
                    <button onClick={this.resetLogoUrl} className="btn-reset">Remove</button>
                  </div>
                </div>
                <div className="form-body__right">
                  <form className="info-form" onSubmit={this.onSubmit}>
                    <div className="basic-block">
                      <p className="form-body__right__title">BASIC INF0</p>
                      <Input
                        value={store.name}
                        placeholder="store name"
                        label="Store Name"
                        required
                        id="name"
                      />
                      <div className="address-block">
                        <div className="in-address">
                          <Input
                            value={store.address}
                            placeholder="Address"
                            label="Store Address"
                            required
                            id="address"
                          />
                        </div>
                        <div className="in-district">
                          <Select
                            keyValue="dis"
                            options={districtArray}
                            value={district}
                            name="district"
                            label="District"
                            onChange={this.changeDistrict}
                            required
                            id="district"
                          />
                        </div>
                        <div className="in-city">
                          <Select
                            keyValue="city"
                            options={cityList}
                            value={city}
                            name="city"
                            label="City"
                            onChange={this.changeCity}
                            required
                            id="city"
                          />
                        </div>
                      </div>
                      <Input
                        value={store.phone}
                        placeholder="0123456789"
                        label="Phone #"
                        type="tel"
                        required
                        id="phone"
                      />
                      {error && <span className="err-meg">{error}</span>}
                    </div>
                    <div className="invoice-block">
                      <p className="form-body__right__title">RED INVOICE INF0</p>
                      <Input
                        value={store.redInvoive.name}
                        placeholder="company name"
                        label="Company Name"
                        name="rName"
                        required
                        id="rName"
                      />
                      <div className="address-block">
                        <div className="in-address">
                          <Input
                            value={store.redInvoive.address}
                            placeholder="Address"
                            label="Company Address"
                            name="rAddress"
                            required
                            id="rAddress"
                          />
                        </div>
                        <div className="in-district">
                          <Select
                            keyValue="dis"
                            options={inDistrictArray}
                            value={invoiceDistrict}
                            name="rDistrict"
                            label="District"
                            onChange={(value) => this.changeDistrict(value, 'invoice')}
                            required
                            id="rDistrict"
                          />
                        </div>
                        <div className="in-city">
                          <Select
                            keyValue="city"
                            options={cityList}
                            value={invoiceCity}
                            name="rCity"
                            label="City"
                            onChange={(value) => this.changeCity(value, 'invoice')}
                            required
                            id="rCity"
                          />
                        </div>
                      </div>
                      <Input
                        value={store.redInvoive.taxCode}
                        placeholder="P0123456789"
                        name="taxCode"
                        label="Tax Code"
                        required
                        id="taxCode"
                      />
                    </div>
                    <button type="submit" className="btn-save">Save</button>
                    <button onClick={this.toggleModal} className="btn-cancel" >Cancel</button>
                  </form>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </InfomationStyle>
    );
  }
}

export default HOCToast(Infomation);
