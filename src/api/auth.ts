import CryptoJS from 'crypto-js';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function signupUser(data: SignupData) {
  const hashedPassphrase = CryptoJS.SHA256(data.password).toString();

  const res = await fetch('http://localhost:8081/api/auth/wallet/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      passphrase_hash: hashedPassphrase,
      language_to_learn: data.language_to_learn,
      native_language: data.native_language || 'english',

      // Dummy wallet data the backend seems to expect
      sei_address: 'sei1dummyaddress',
      sei_public_key: 'seipubkey_dummy',
      eth_address: '0xethdummy',
      eth_public_key: 'ethpubkey_dummy',

      encrypted_mnemonic: 'encryptedMnemonic_dummy',
      salt: 'dummySalt',
      nonce: 'dummyNonce',

      encrypted_stretched_passphrase: 'dummyEncryptedStretchedPassphrase',
      stretched_key_nonce: 'dummyNonce2',
      encryption_salt: 'dummySalt2',
    }),
  });

  if (!res.ok) {
    const message = await res.text();
    console.error('Signup error:', message);
    throw new Error(`Signup failed: ${res.status} ${res.statusText}`);
  }

  return await res.json();
}
