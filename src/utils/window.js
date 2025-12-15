import { empty_string } from "../constant/global-constant";

//some window utility function which will be used across the app
export const isBrowser = typeof window !== 'undefined';
export const isServer = typeof window === 'undefined';
export const getWindowUrl = () => isBrowser ? window.location.href : empty_string;
