---
sidebar_position: 1
title: Overview
---



`JWT's` **(Json Web Token)** are a common source of Vulnerabilities, both in how they are in implemented in Applications, and in the underlying libraries. As they are used for Authentication, a Vulnerability can easily result in a complete compromise of the Application.

<br/>


- <b style={{ color: 'Coral' }}>JWT Token:</b>

    - <b style={{ color: 'LightSkyBlue' }}>HEADER:</b><b style={{ color: 'LightGreen' }}>PAYLOAD:</b><b style={{ color: 'Plum' }}>SECRET</b>
    - The <b style={{ color: 'Plum' }}>SECRET</b> is only known to the Server, and is used to make sure that Data wasn't changed along the way. Everything is then `BASE64` encoded.  If we are able to control the <b style={{ color: 'Plum' }}>SECRET</b> we can effectively control the Data.

```js
eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJQYXJhZG94IiwiaWF0IjoxNjQ0Mjc4MTM1LCJleHAiOjE2NDQyNzgyNTUsImRhdGEiOnsicGluZ3UiOiJub290cyJ9fQ.E-PuCJEhs2zp5a_NEsL-boVJ_pbtmOIb_t-YFQtcPFs2ysQ-89-91rlapGjn8AYtLegScNx0Lz5QgfCizjZ_SNN8hQc-UVX1mqcI3-1O3FJ_VEtUqsV5Gx9dqD9Sqk8bM1pC8yP9H32HoUASLL_wKpWr8tblV5DAIwlfnXqxiWSNzqahqPIleATyDUXnpaQN6yeCfLFZ_5vNHN0TwhbmuL7PIpjShVBJh5-5Fqgtr-g6SRLPoxPZgxwQNdhs0ZfAlvHBUi99ZOVvDnxQOZ_PJXv_upyGS1UBV9cxXC_UZVh2mBiQ7IlvgWJvHtT3AJ9u16Pytc1lgc6T4kq0BTBuJw
```

<br/>

- <b style={{ color: 'LightSkyBlue' }}>JWT Header:</b>

    - We are Interested in the <b style={{ color: 'LightSkyBlue' }}>ALG</b> field which **RS256** uses. It's a private RSA key that's only available to the Server, that's not Vulnerable. We can change that field to `HS256`. This is calculated using the Server's Public Key, which in certain circumstances we may have Access too.

```js
eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9

{
  "typ": "JWT",
  "alg": "RS256"
}
```

- Public Key

```js
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqi8TnuQBGXOGx/Lfn4JF
NYOH2V1qemfs83stWc1ZBQFCQAZmUr/sgbPypYzy229pFl6bGeqpiRHrSufHug7c
1LCyalyUEP+OzeqbEhSSuUss/XyfzybIusbqIDEQJ+Yex3CdgwC/hAF3xptV/2t+
H6y0Gdh1weVKRM8+QaeWUxMGOgzJYAlUcRAP5dRkEOUtSKHBFOFhEwNBXrfLd76f
ZXPNgyN0TzNLQjPQOy/tJ/VFq8CQGE4/K5ElRSDlj4kswxonWXYAUVxnqRN1LGHw
2G5QRE2D13sKHCC8ZrZXJzj67Hrq5h2SADKzVzhA8AW3WZlPLrlFT3t1+iZ6m+aF
KwIDAQAB
-----END PUBLIC KEY-----
```

## JWT-CRACKER

We can use `JWT-CRACKER` to Brute-Force JWT <b style={{ color: 'Plum' }}>SECRET</b>. Alphabet and Max-Length are Optional.

```bash
attacker@machine:~$ jwt-cracker "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ[...].tgE1GJAUwr4I480BIc[...]" abcdefghijklmnopqrstuvwxyz 4
```