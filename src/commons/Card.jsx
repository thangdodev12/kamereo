import React from 'react';
import PropTypes from 'prop-types';
import { host } from '../constants';
import CardStyle from './CardStyle';

const Card = ({ data, edit }) => (
  <CardStyle>
    <img src={`${host}${data.logoUrl}`} alt={data.name} />
    <div className="store-info">
      <h5 className="store-label">STORE INFO.</h5>
      <ul>
        <li>
          <p className="store-name">
            <span className="label store-name__label">Name:</span>
            <span className="text store-name__text">{data.name}</span>
          </p>
        </li>
        <li>
          <p className="store-address">
            <span className="label store-address__label">Address:</span>
            <span className="text store-address__text">{data.address}, {data.district}, {data.city}</span>
          </p>
        </li>
        <li>
          <p className="store-phone">
            <span className="label store-phone__label">Phone #:</span>
            <span className="text store-phone__text">{data.phone}</span>
          </p>
        </li>
      </ul>
    </div>
    <div className="red-invoice">
      <h5 className="invoice-label">RED INVOICE INFO.</h5>
      <ul>
        <li>
          <p className="invoice-name">
            <span className="label invoice-name__label">Company Name:</span>
            <span className="text invoice-name__text">{data.redInvoive.name}</span>
          </p>
        </li>
        <li>
          <p className="invoice-address">
            <span className="label invoice-address__label">Address: </span>
            <span className="text invoice-address__text">{data.redInvoive.address}, {data.redInvoive.district}, {data.redInvoive.city}</span>
          </p>
        </li>
        <li>
          <p className="invoice-tax">
            <span className="label invoice-tax__label">MST:</span>
            <span className="text invoice-tax__text">{data.redInvoive.taxCode}</span>
          </p>
        </li>
      </ul>
    </div>
    <button className="edit-card" onClick={edit}>Edit Profile</button>
  </CardStyle>
);

Card.propTypes = {
  data: PropTypes.shape({
    logoUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
    redInvoive: PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      district: PropTypes.string.isRequired,
      taxCode: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  edit: PropTypes.func,
}

Card.defaultProps = {
  edit: () => {},
};

export default Card;
