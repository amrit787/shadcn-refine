'use client';

import axiosInstance from '@lib/axios';
import dataProviderSimpleRest from '@refinedev/simple-rest';
import axios, { Axios } from 'axios';
import { customDataProvider } from './dataProvider';

export const API_URL = 'http://localhost:4000/api';

export const dataProvider = customDataProvider(API_URL, axiosInstance);
