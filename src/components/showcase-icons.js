/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';

export const menuIcon = html`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>`;
export const addToCartIcon = html`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none"/><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></svg>`;
export const removeFromCartIcon = html`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
export const minusIcon = html`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`;
export const plusIcon = html`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`;
export const emailIcon = html `<svg height="24" viewBox="0 0 24 24" width="24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>`
export const socialIcons = {
    quora: html `<svg height="24" width="24" viewBox="0 0 24 24"><path fill="#b92b27" style="fill: var(--color1, #b92b27)" d="M12.738 18.701c-0.831-1.635-1.805-3.287-3.708-3.287-0.362 0-0.727 0.061-1.059 0.209l-0.646-1.289c0.786-0.678 2.058-1.214 3.693-1.214 2.544 0 3.851 1.229 4.888 2.792 0.613-1.335 0.904-3.14 0.904-5.375 0-5.582-1.744-8.447-5.822-8.447-4.018 0-5.757 2.865-5.757 8.447 0 5.553 1.739 8.389 5.757 8.389 0.64 0 1.22-0.069 1.75-0.225zM13.734 20.648c-0.881 0.237-1.817 0.366-2.743 0.366-5.352 0-10.59-4.269-10.59-10.478 0.001-6.265 5.238-10.536 10.59-10.536 5.441 0 10.628 4.238 10.628 10.537 0 3.504-1.635 6.351-4.010 8.191 0.764 1.148 1.543 1.914 2.652 1.914 1.199 0 1.68-0.915 1.77-1.649h1.557c0.092 0.974-0.402 5.007-4.766 5.007-2.652 0-4.047-1.528-5.096-3.328l0.008-0.024z"></path></svg>`,
    github: html`<svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 0.296c-6.627 0-12 5.372-12 12 0 5.302 3.438 9.8 8.206 11.387 0.6 0.111 0.82-0.26 0.82-0.577 0-0.286-0.011-1.231-0.016-2.234-3.339 0.726-4.043-1.416-4.043-1.416-0.546-1.387-1.332-1.756-1.332-1.756-1.089-0.745 0.082-0.729 0.082-0.729 1.205 0.085 1.839 1.237 1.839 1.237 1.070 1.834 2.807 1.304 3.492 0.997 0.108-0.775 0.418-1.305 0.762-1.605-2.666-0.303-5.467-1.332-5.467-5.93 0-1.31 0.469-2.381 1.237-3.221-0.125-0.302-0.536-1.523 0.116-3.176 0 0 1.008-0.322 3.301 1.23 0.957-0.266 1.984-0.399 3.004-0.404 1.020 0.005 2.047 0.138 3.006 0.404 2.291-1.553 3.297-1.23 3.297-1.23 0.653 1.653 0.243 2.873 0.118 3.176 0.769 0.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921 0.43 0.372 0.814 1.103 0.814 2.222 0 1.606-0.014 2.898-0.014 3.293 0 0.319 0.216 0.694 0.824 0.576 4.765-1.588 8.199-6.085 8.199-11.385 0-6.628-5.373-12-12-12z"></path></svg>`,
    linkedin: html `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#0077b5" style="fill: var(--color1, #0077b5)" d="M20.447 20.452h-3.554v-5.569c0-1.328-0.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h0.046c0.477-0.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-0.926-2.063-2.065 0-1.138 0.92-2.063 2.063-2.063 1.14 0 2.064 0.925 2.064 2.063 0 1.139-0.925 2.065-2.064 2.065zM7.119 20.452h-3.564v-11.452h3.564v11.452zM22.225 0h-20.454c-0.979 0-1.771 0.774-1.771 1.729v20.542c0 0.956 0.792 1.729 1.771 1.729h20.451c0.978 0 1.778-0.773 1.778-1.729v-20.542c0-0.955-0.8-1.729-1.778-1.729h0.003z"></path></svg>`,
    twitter: html `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#1da1f2" style="fill: var(--color2, #1da1f2)" d="M23.954 4.569c-0.885 0.389-1.83 0.654-2.825 0.775 1.014-0.611 1.794-1.574 2.163-2.723-0.951 0.555-2.005 0.959-3.127 1.184-0.896-0.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 0.39 0.045 0.765 0.127 1.124-4.090-0.193-7.715-2.157-10.141-5.126-0.427 0.722-0.666 1.561-0.666 2.475 0 1.71 0.87 3.213 2.188 4.096-0.807-0.026-1.566-0.248-2.228-0.616v0.061c0 2.385 1.693 4.374 3.946 4.827-0.413 0.111-0.849 0.171-1.296 0.171-0.314 0-0.615-0.030-0.916-0.086 0.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-0.39 0-0.779-0.023-1.17-0.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-0.209 0-0.42-0.015-0.63 0.961-0.689 1.8-1.56 2.46-2.548l-0.047-0.020z"></path></svg>`,
}