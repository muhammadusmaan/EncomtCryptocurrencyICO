import React, { useState, Component, useEffect } from 'react'
import NavBarDoc from '../../NavBarDoc'
import SideBarDoc from '../../SideBarDoc'
import style from '../TokenProgram/TokenProgram.css'
import Tabs, { Tab } from 'react-best-tabs';
import 'react-best-tabs/dist/index.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function TokenProgram() {
    const [isSidebar, setIsSidebar] = useState(false)
    const codeString = '$ cargo install spl-token-cli';
    const currentconfig = '$ En Comt config get Config File: ${ HOME } /.config/En Comt / cli / config. yml RPC URL: https://api.mainnet-beta.En Comt.com WebSocket URL: wss://api.mainnet-beta.En Comt.com/ (computed) Keypair Path: ${ HOME } /.config/En Comt / id.json';
    const clusterurl = '$ En Comt config set --url https://api.devnet.En Comt.com';
    const keypair = '$ En Comt config set --keypair ${HOME}/new-keypair.json'
    const hardwareurl = '$ En Comt config set --keypair usb://ledger/'
    const yarn = 'yarn add @En Comt/spl-token';
    const npm = 'npm install @En Comt/spl-token'
    const configjs = "const web3 = require('@En Comt/web3.js'); const connection = new web3.Connection(web3.clusterApiUrl('devnet'), 'confirmed');"
    const airdrop = "$ En Comt airdrop 1";
    const airdropjs = "import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL } from '@En Comt/web3.js'; const payer = Keypair.generate();const connection = new Connection (clusterApiUrl('devnet') 'confirmed');const airdropSignature = await connection.requestAirdrop (payer.publicKey, LAMPORTS_PER_SOL,); await connection.confirmTransaction(airdropSignature);";
    const fungibletoken = "$ spl-token create-token Creating token AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM Signature: 47hsLFxWRCg8azaZZPSnQR8DNTRsGyPNfUK7jqyzgt7wf9eag3nSnewqoZrVZHKm8zt3B6gzxhr91gdQ5qYrsRG4";
    const fungibletokenjs = "import { createMint } from '@En Comt/spl-token'; import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL } from '@En Comt/web3.js'; const payer = Keypair.generate(); const mintAuthority = Keypair.generate(); const freezeAuthority = Keypair.generate(); const connection = new Connection (clusterApiUrl('devnet'), 'confirmed' ); const mint = await createMint(connection, payer, mintAuthority.publicKey, freezeAuthority.publicKey, 9 // We are using 9 to match the CLI decimal default exactly); console.log(mint.toBase58()); // AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM"
    const spltoken = '$ spl-token supply AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM0';
    const spltokenjs = 'const mintInfo = await getMint(connection,mint) console.log(mintInfo.supply);// 0';
    const splcreateaccount = '$ spl-token create-account AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM Creating account 7UX2i7SucgLMQcfZ75s3VXmZZY4YRUyJN9X1RgfMoDUi Signature: 42Sa5eK9dMEQyvD9GMHuKxXf55WLZ7tfjabUKDhNoZRAxj9MsnN7omriWMEHXLea3aYpjZ862qocRLVikvkHkyfy';
    const splcreateaccountjs = 'const tokenAccount = await getOrCreateAssociatedTokenAccount(connection,payer, mint, payer.publicKey) console.log(tokenAccount.address.toBase58()); // 7UX2i7SucgLMQcfZ75s3VXmZZY4YRUyJN9X1RgfMoDUi'
    const spltokenbalance = '$ spl-token balance AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM0';
    const spltokenbalancejs = 'const tokenAccountInfo = await getAccount(connection,tokenAccount.address) console.log(tokenAccountInfo.amount); // 0';
    const spltokenmint = '$ spl-token mint AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM 100 Minting 100 tokens Token: AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM   Recipient: 7UX2i7SucgLMQcfZ75s3VXmZZY4YRUyJN9X1RgfMoDUi Signature: 41mARH42fPkbYn1mvQ6hYLjmJtjW98NXwd6pHqEYg9p8RnuoUsMxVd16RkStDHEzcS2sfpSEpFscrJQn3HkHzLaa'
    const spltokenmintjs = 'await mintTo(connection,payer,mint,tokenAccount.address,mintAuthority, 100000000000 // because decimals for the mint are set to 9 )';
    const spltokesupply = '$ spl-token supply AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM100';
    const spltoken_balance = '$ spl-token balance AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM100';
    const spltokenmintinfojs = 'const mintInfo = await getMint(connection,mint) console.log(mintInfo.supply); // 100;const tokenAccountInfo = await getAccount(connection,tokenAccount.address) ; console.log(tokenAccountInfo.amount);// 100'
    const viewtoken = `{$ spl-token accounts} 
    Token                         Balance
    ------------------------------------------------------------
     7e2X5oeAAJyUTi4PfSGXFLGhyPw2H8oELm1mx87ZCgwF
    84 AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM
    100 AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM  
    0(Aux - 1 *) AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM  1(Aux - 2 *)`
    const viewtokenjs = `import {AccountLayout, TOKEN_PROGRAM_ID} from "@En Comt/spl-token";
    import {clusterApiUrl, Connection, PublicKey} from "@En Comt/web3.js";
    (async () => {
      const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    
      const tokenAccounts = await connection.getTokenAccountsByOwner(
        new PublicKey('8YLKoCu7NwqHNS8GzuvA2ibsvLrsg22YMfMDafxh1B15'),
        {
          programId: TOKEN_PROGRAM_ID,
        }
      );
    
      console.log("Token                                         Balance");
      console.log("------------------------------------------------------------");
      tokenAccounts.value.forEach((e) => {
        const accountInfo = AccountLayout.decode(e.account.data);
        console.log({new PublicKey(accountInfo.mint)}   {accountInfo.amount});
      })
    
    })();
    
    /*
    Token                                         Balance
    ------------------------------------------------------------
    7e2X5oeAAJyUTi4PfSGXFLGhyPw2H8oELm1mx87ZCgwF  84
    AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM  100
    AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM  0
    AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM  1
    */`;
    const tokenwrap = `$ spl-token wrap 1
Wrapping 1 SOL into GJTxcnA5Sydy8YRhqvHxbQ5QNsPyRKvzguodQEaShJje
Signature: 4f4s5QVMKisLS6ihZcXXPbiBAzjnvkBcp2A7KKER7k9DwJ4qjbVsQBKv2rAyBumXC1gLn8EJQhwWkybE4yJGnw2Y`
    const tokenwrapjs = `import {NATIVE_MINT, createAssociatedTokenAccountInstruction, getAssociatedTokenAddress, createSyncNativeInstruction, getAccount} from "@En Comt/spl-token";
import {clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL, SystemProgram, Transaction, sendAndConfirmTransaction} from "@En Comt/web3.js";

(async () => {

const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

const wallet = Keypair.generate();

const airdropSignature = await connection.requestAirdrop(
  wallet.publicKey,
  2 * LAMPORTS_PER_SOL,
);

await connection.confirmTransaction(airdropSignature);

const associatedTokenAccount = await getAssociatedTokenAddress(
  NATIVE_MINT,
  wallet.publicKey
)

// Create token account to hold your wrapped SOL
const ataTransaction = new Transaction()
  .add(
    createAssociatedTokenAccountInstruction(
      wallet.publicKey,
      associatedTokenAccount,
      wallet.publicKey,
      NATIVE_MINT
    )
  );

await sendAndConfirmTransaction(connection, ataTransaction, [wallet]);

// Transfer SOL to associated token account and use SyncNative to update wrapped SOL balance
const solTransferTransaction = new Transaction()
  .add(
    SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: associatedTokenAccount,
        lamports: LAMPORTS_PER_SOL
      }),
      createSyncNativeInstruction(
        associatedTokenAccount
    )
  )

await sendAndConfirmTransaction(connection, solTransferTransaction, [wallet]);

const accountInfo = await getAccount(connection, associatedTokenAccount);

console.log('Native: $'{accountInfo.isNative}, Lamports: $'{accountInfo.amount}');

})();`;
    const tokenunwrap = `$ spl-token unwrap GJTxcnA5Sydy8YRhqvHxbQ5QNsPyRKvzguodQEaShJje
Unwrapping GJTxcnA5Sydy8YRhqvHxbQ5QNsPyRKvzguodQEaShJje
  Amount: 1 SOL
  Recipient: vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg
Signature: f7opZ86ZHKGvkJBQsJ8Pk81v8F3v1VUfyd4kFs4CABmfTnSZK5BffETznUU3tEWvzibgKJASCf7TUpDmwGi8Rmh`;
    const tokenunwrapjs = `const walletBalance = await connection.getBalance(wallet.publicKey);

console.log('Balance before unwrapping 1 WSOL: $'{walletBalance}')

await closeAccount(connection, wallet, associatedTokenAccount, wallet.publicKey, wallet);

const walletBalancePostClose = await connection.getBalance(wallet.publicKey);

console.log('Balance after unwrapping 1 WSOL: $'{walletBalancePostClose}')

/*
Balance before unwrapping 1 WSOL: 997950720
Balance after unwrapping 1 WSOL: 1999985000
*/`;
    const tokentransfer = `$ spl-token transfer AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM 50 vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg
Transfer 50 tokens
  Sender: 7UX2i7SucgLMQcfZ75s3VXmZZY4YRUyJN9X1RgfMoDUi
  Recipient: vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg
  Recipient associated token account: F59618aQB8r6asXeMcB9jWuY6NEx1VduT9yFo1GTi1ks

Signature: 5a3qbvoJQnTAxGPHCugibZTbSu7xuTgkxvF4EJupRjRXGgZZrnWFmKzfEzcqKF2ogCaF4QKVbAtuFx7xGwrDUcGd`;

    const tokentransferjs = `import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL } from '@En Comt/web3.js';
import { createMint, getOrCreateAssociatedTokenAccount, mintTo, transfer } from '@En Comt/spl-token';

(async () => {
    // Connect to cluster
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

    // Generate a new wallet keypair and airdrop SOL
    const fromWallet = Keypair.generate();
    const fromAirdropSignature = await connection.requestAirdrop(fromWallet.publicKey, LAMPORTS_PER_SOL);

    // Wait for airdrop confirmation
    await connection.confirmTransaction(fromAirdropSignature);

    // Generate a new wallet to receive newly minted token
    const toWallet = Keypair.generate();

    // Create new token mint
    const mint = await createMint(connection, fromWallet, fromWallet.publicKey, null, 9);

    // Get the token account of the fromWallet address, and if it does not exist, create it
    const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        fromWallet,
        mint,
        fromWallet.publicKey
    );

    // Get the token account of the toWallet address, and if it does not exist, create it
    const toTokenAccount = await getOrCreateAssociatedTokenAccount(connection, fromWallet, mint, toWallet.publicKey);

    // Mint 1 new token to the "fromTokenAccount" account we just created
    let signature = await mintTo(
        connection,
        fromWallet,
        mint,
        fromTokenAccount.address,
        fromWallet.publicKey,
        1000000000
    );
    console.log('mint tx:', signature);

    // Transfer the new token to the "toTokenAccount" we just created
    signature = await transfer(
        connection,
        fromWallet,
        fromTokenAccount.address,
        toTokenAccount.address,
        fromWallet.publicKey,
        50
    );
})();`
    const tokentransferfund = `$ spl-token transfer --fund-recipient AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM 50 vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg
Transfer 50 tokens
  Sender: 7UX2i7SucgLMQcfZ75s3VXmZZY4YRUyJN9X1RgfMoDUi
  Recipient: vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg
  Recipient associated token account: F59618aQB8r6asXeMcB9jWuY6NEx1VduT9yFo1GTi1ks
  Funding recipient: F59618aQB8r6asXeMcB9jWuY6NEx1VduT9yFo1GTi1ks (0.00203928 SOL)

Signature: 5a3qbvoJQnTAxGPHCugibZTbSu7xuTgkxvF4EJupRjRXGgZZrnWFmKzfEzcqKF2ogCaF4QKVbAtuFx7xGwrDUcGd`;
    const tokentransferfundjs = `const signature = await transfer(
    connection,
    toWallet,
    fromTokenAccount.address,
    toTokenAccount.address,
    fromWallet.publicKey,
    50,
    [fromWallet, toWallet]
);`
    const explicitrecipient = `
$ spl-token create-account AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM /path/to/auxiliary_keypair.json
Creating account CqAxDdBRnawzx9q4PYM3wrybLHBhDZ4P6BTV13WsRJYJ
Signature: 4yPWj22mbyLu5mhfZ5WATNfYzTt5EQ7LGzryxM7Ufu7QCVjTE7czZdEBqdKR7vjKsfAqsBdjU58NJvXrTqCXvfWW
`;
    const explicitrecipient2 = `$ spl-token accounts AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM -v
Account                                       Token                                         Balance
--------------------------------------------------------------------------------------------------------
7UX2i7SucgLMQcfZ75s3VXmZZY4YRUyJN9X1RgfMoDUi  AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM  100
CqAxDdBRnawzx9q4PYM3wrybLHBhDZ4P6BTV13WsRJYJ  AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM  0    (Aux-1*)`;
    const explicitrecipient3 = `$ spl-token transfer AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM 50 CqAxDdBRnawzx9q4PYM3wrybLHBhDZ4P6BTV13WsRJYJ
Transfer 50 tokens
  Sender: 7UX2i7SucgLMQcfZ75s3VXmZZY4YRUyJN9X1RgfMoDUi
  Recipient: CqAxDdBRnawzx9q4PYM3wrybLHBhDZ4P6BTV13WsRJYJ

Signature: 5a3qbvoJQnTAxGPHCugibZTbSu7xuTgkxvF4EJupRjRXGgZZrnWFmKzfEzcqKF2ogCaF4QKVbAtuFx7xGwrDUcGd`;
    const explicitrecipient4 = `$ spl-token accounts AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM -v
Account                                       Token                                         Balance
--------------------------------------------------------------------------------------------------------
7UX2i7SucgLMQcfZ75s3VXmZZY4YRUyJN9X1RgfMoDUi  AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM  50
CqAxDdBRnawzx9q4PYM3wrybLHBhDZ4P6BTV13WsRJYJ  AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM  50  (Aux-1*)`;
    const explicitrecipientjs = `
    import {getAccount, createMint, createAccount, mintTo, getOrCreateAssociatedTokenAccount, transfer} from "@En Comt/spl-token";
import {clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL} from "@En Comt/web3.js";

(async () => {

  const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

  const wallet = Keypair.generate();
  const auxiliaryKeypair = Keypair.generate();

  const airdropSignature = await connection.requestAirdrop(
    wallet.publicKey,
    LAMPORTS_PER_SOL,
  );

  await connection.confirmTransaction(airdropSignature);

  const mint = await createMint(
    connection,
    wallet,
    wallet.publicKey,
    wallet.publicKey,
    9
  );

  // Create custom token account
  const auxiliaryTokenAccount = await createAccount(
    connection,
    wallet,
    mint,
    wallet.publicKey,
    auxiliaryKeypair
  );

  const associatedTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    wallet,
    mint,
    wallet.publicKey
  );

  await mintTo(
    connection,
    wallet,
    mint,
    associatedTokenAccount.address,
    wallet,
    50
  );

  const accountInfo = await getAccount(connection, associatedTokenAccount.address);

  console.log(accountInfo.amount);
  // 50

  await transfer(
    connection,
    wallet,
    associatedTokenAccount.address,
    auxiliaryTokenAccount,
    wallet,
    50
  );

  const auxAccountInfo = await getAccount(connection, auxiliaryTokenAccount);

  console.log(auxAccountInfo.amount);
  // 50
})();
    `;
    const nonfungibletoken = `$ spl-token create-token --decimals 0
Creating token 559u4Tdr9umKwft3yHMsnAxohhzkFnUBPAFtibwuZD9z
Signature: 4kz82JUey1B9ki1McPW7NYv1NqPKCod6WNptSkYqtuiEsQb9exHaktSAHJJsm4YxuGNW4NugPJMFX9ee6WA2dXts`;
    const nonfungibletokenjs = `const mint = await createMint(
    connection,
    wallet,
    wallet.publicKey,
    wallet.publicKey,
    0
  );`
    const holdtokens = `$ spl-token create-account 559u4Tdr9umKwft3yHMsnAxohhzkFnUBPAFtibwuZD9z
Creating account 7KqpRwzkkeweW5jQoETyLzhvs9rcCj9dVQ1MnzudirsM
Signature: sjChze6ecaRtvuQVZuwURyg6teYeiH8ZwT6UTuFNKjrdayQQ3KNdPB7d2DtUZ6McafBfEefejHkJ6MWQEfVHLtC`;
    const holdtokensjs = `const associatedTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    wallet,
    mint,
    wallet.publicKey
  );`
    const tokenmintonly = `$ spl-token mint 559u4Tdr9umKwft3yHMsnAxohhzkFnUBPAFtibwuZD9z 1 7KqpRwzkkeweW5jQoETyLzhvs9rcCj9dVQ1MnzudirsM
Minting 1 tokens
  Token: 559u4Tdr9umKwft3yHMsnAxohhzkFnUBPAFtibwuZD9z
  Recipient: 7KqpRwzkkeweW5jQoETyLzhvs9rcCj9dVQ1MnzudirsM
Signature: 2Kzg6ZArQRCRvcoKSiievYy3sfPqGV91Whnz6SeimhJQXKBTYQf3E54tWg3zPpYLbcDexxyTxnj4QF69ucswfdY`;
    const tokenmintonlyjs = `await mintTo(
    connection,
    wallet,
    mint,
    associatedTokenAccount.address,
    wallet,
    1
  );`;
    const futureminting = `$ spl-token authorize 559u4Tdr9umKwft3yHMsnAxohhzkFnUBPAFtibwuZD9z mint --disable
Updating 559u4Tdr9umKwft3yHMsnAxohhzkFnUBPAFtibwuZD9z
  Current mint authority: vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg
  New mint authority: disabled
Signature: 5QpykLzZsceoKcVRRFow9QCdae4Dp2zQAcjebyEWoezPFg2Np73gHKWQicHG1mqRdXu3yiZbrft3Q8JmqNRNqhwU`;
    const futuremintingjs = `
let transaction = new Transaction()
  .add(createSetAuthorityInstruction(
    mint,
    wallet.publicKey,
    AuthorityType.MintTokens,
    null
  ));

await web3.sendAndConfirmTransaction(connection, transaction, [wallet]);`
    const accountholds = `$ spl-token account-info 559u4Tdr9umKwft3yHMsnAxohhzkFnUBPAFtibwuZD9z

Address: 7KqpRwzkkeweW5jQoETyLzhvs9rcCj9dVQ1MnzudirsM
Balance: 1
Mint: 559u4Tdr9umKwft3yHMsnAxohhzkFnUBPAFtibwuZD9z
Owner: vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg
State: Initialized
Delegation: (not set)
Close authority: (not set)`;
    const accountholds2 = `$ spl-token supply 559u4Tdr9umKwft3yHMsnAxohhzkFnUBPAFtibwuZD9z1`;
    const accountholdsjs = `const accountInfo = await getAccount(connection, associatedTokenAccount.address);

console.log(accountInfo.amount);
// 1
const mintInfo = await getMint(
    connection,
    mint
  );

console.log(mintInfo);
/*
{
  address: "7KqpRwzkkeweW5jQoETyLzhvs9rcCj9dVQ1MnzudirsM",
  mintAuthority: "559u4Tdr9umKwft3yHMsnAxohhzkFnUBPAFtibwuZD9z",
  supply: 1,
  decimals: 0,
  isInitialized: true,
  freezeAuthority: "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg"
}
 */`;
    const multisigauthority = `$ for i in $(seq 3); do En Comt-keygen new --no-passphrase -so "signer-$'{i}.json"; done
Wrote new keypair to signer-1.json
Wrote new keypair to signer-2.json
Wrote new keypair to signer-3.json`;
    const multisigauthorityjs = `const signer1 = Keypair.generate();
const signer2 = Keypair.generate();
const signer3 = Keypair.generate();`;
    const ordertocreate = `$ for i in $(seq 3); do SIGNER="signer-$'{i}.json"; echo "$SIGNER: $(En Comt-keygen pubkey "$SIGNER")"; done
signer-1.json: BzWpkuRrwXHq4SSSFHa8FJf6DRQy4TaeoXnkA89vTgHZ
signer-2.json: DhkUfKgfZ8CF6PAGKwdABRL1VqkeNrTSRx8LZfpPFVNY
signer-3.json: D7ssXHrZJjfpZXsmDf8RwfPxe1BMMMmP1CtmX3WojPmG`;
    const ordertocreatejs = `console.log(signer1.publicKey.toBase58());
console.log(signer2.publicKey.toBase58());
console.log(signer3.publicKey.toBase58());
/*
  BzWpkuRrwXHq4SSSFHa8FJf6DRQy4TaeoXnkA89vTgHZ
  DhkUfKgfZ8CF6PAGKwdABRL1VqkeNrTSRx8LZfpPFVNY
  D7ssXHrZJjfpZXsmDf8RwfPxe1BMMMmP1CtmX3WojPmG
 */`;
    const createmultisig2 = `$ spl-token create-multisig 2 BzWpkuRrwXHq4SSSFHa8FJf6DRQy4TaeoXnkA89vTgHZ \
DhkUfKgfZ8CF6PAGKwdABRL1VqkeNrTSRx8LZfpPFVNY D7ssXHrZJjfpZXsmDf8RwfPxe1BMMMmP1CtmX3WojPmG`;
    const createmultisig3 = `Creating 2/3 multisig 46ed77fd4WTN144q62BwjU2B3ogX3Xmmc8PT5Z3Xc2re
Signature: 2FN4KXnczAz33SAxwsuevqrD1BvikP6LUhLie5Lz4ETt594X8R7yvMZzZW2zjmFLPsLQNHsRuhQeumExHbnUGC9A`;
    const createmultisig2js = `const multisigKey = await createMultisig(
    connection,
    payer,
    [
      signer1.publicKey,
      signer2.publicKey,
      signer3.publicKey
    ],
    2
  );
  
  console.log('Created 2 / 3 multisig $'{ multisigKey.toBase58() }');
  // Created 2/3 multisig 46ed77fd4WTN144q62BwjU2B3ogX3Xmmc8PT5Z3Xc2re`
    const receivingaccounts = `$ spl-token create-token
Creating token 4VNVRJetwapjwYU8jf4qPgaCeD76wyz8DuNj8yMCQ62o
Signature: 3n6zmw3hS5Hyo5duuhnNvwjAbjzC42uzCA3TTsrgr9htUonzDUXdK1d8b8J77XoeSherqWQM8mD8E1TMYCpksS2r

$ spl-token create-account 4VNVRJetwapjwYU8jf4qPgaCeD76wyz8DuNj8yMCQ62o
Creating account EX8zyi2ZQUuoYtXd4MKmyHYLTjqFdWeuoTHcsTdJcKHC
Signature: 5mVes7wjE7avuFqzrmSCWneKBQyPAjasCLYZPNSkmqmk2YFosYWAP9hYSiZ7b7NKpV866x5gwyKbbppX3d8PcE9s

$ spl-token authorize 4VNVRJetwapjwYU8jf4qPgaCeD76wyz8DuNj8yMCQ62o mint 46ed77fd4WTN144q62BwjU2B3ogX3Xmmc8PT5Z3Xc2re
Updating 4VNVRJetwapjwYU8jf4qPgaCeD76wyz8DuNj8yMCQ62o
  Current mint authority: 5hbZyJ3KRuFvdy5QBxvE9KwK17hzkAUkQHZTxPbiWffE
  New mint authority: 46ed77fd4WTN144q62BwjU2B3ogX3Xmmc8PT5Z3Xc2re
Signature: yy7dJiTx1t7jvLPCRX5RQWxNRNtFwvARSfbMJG94QKEiNS4uZcp3GhhjnMgZ1CaWMWe4jVEMy9zQBoUhzomMaxC`;
    const receivingaccountsjs = `const mint = await createMint(
    connection,
    payer,
    multisigKey,
    multisigKey,
    9
  );

const associatedTokenAccount = await getOrCreateAssociatedTokenAccount(
  connection,
  payer,
  mint,
  signer1.publicKey
);`
    const multisigsigner = `$ spl-token mint 4VNVRJetwapjwYU8jf4qPgaCeD76wyz8DuNj8yMCQ62o 1 EX8zyi2ZQUuoYtXd4MKmyHYLTjqFdWeuoTHcsTdJcKHC \
--owner 46ed77fd4WTN144q62BwjU2B3ogX3Xmmc8PT5Z3Xc2re \
--multisig-signer signer-1.json`;
    const multisigsigner2 = `Minting 1 tokens
Token: 4VNVRJetwapjwYU8jf4qPgaCeD76wyz8DuNj8yMCQ62o
Recipient: EX8zyi2ZQUuoYtXd4MKmyHYLTjqFdWeuoTHcsTdJcKHC
RPC response error -32002: Transaction simulation failed: Error processing Instruction 0: missing required signature for instruction`;
    const multisigsignerjs = `try {
    await mintTo(
      connection,
      payer,
      mint,
      associatedTokenAccount.address,
      multisigKey,
      1
    )
  } catch (e) {
    console.log(e);
  }
  // Error: Signature verification failed`;
    const repeatingmultisig = `$ spl-token mint 4VNVRJetwapjwYU8jf4qPgaCeD76wyz8DuNj8yMCQ62o 1 EX8zyi2ZQUuoYtXd4MKmyHYLTjqFdWeuoTHcsTdJcKHC \
--owner 46ed77fd4WTN144q62BwjU2B3ogX3Xmmc8PT5Z3Xc2re \
--multisig-signer signer-1.json \
--multisig-signer signer-2.json`;
    const repeatingmultisig2 = `Minting 1 tokens
Token: 4VNVRJetwapjwYU8jf4qPgaCeD76wyz8DuNj8yMCQ62o
Recipient: EX8zyi2ZQUuoYtXd4MKmyHYLTjqFdWeuoTHcsTdJcKHC
Signature: 2ubqWqZb3ooDuc8FLaBkqZwzguhtMgQpgMAHhKsWcUzjy61qtJ7cZ1bfmYktKUfnbMYWTC1S8zdKgU6m4THsgspT`;
    const repeatingmultisigjs = `await mintTo(
    connection,
    payer,
    mint,
    associatedTokenAccount.address,
    multisigKey,
    1,
    [
      signer1,
      signer2
    ]
  )
  
  const mintInfo = await getMint(
    connection,
    mint
  )
  
  console.log('Minted $'{ mintInfo.supply } token');
  // Minted 1 token`
    const noncekeypair = `$ En Comt-keygen new -o nonce-keypair.json
...
======================================================================
pubkey: Fjyud2VXixk2vCs4DkBpfpsq48d81rbEzh6deKt7WvPj
======================================================================`;
    const noncekeypair2 = `$ En Comt create-nonce-account nonce-keypair.json 1
Signature: 3DALwrAAmCDxqeb4qXZ44WjpFcwVtgmJKhV4MW5qLJVtWeZ288j6Pzz1F4BmyPpnGLfx2P8MEJXmqPchX5y2Lf3r`
    const noncekeypair3 = `$ En Comt nonce-account Fjyud2VXixk2vCs4DkBpfpsq48d81rbEzh6deKt7WvPj
Balance: 0.01 SOL
Minimum Balance Required: 0.00144768 SOL
Nonce blockhash: 6DPt2TfFBG7sR4Hqu16fbMXPj8ddHKkbU4Y3EEEWrC2E
Fee: 5000 lamports per signature
Authority: 5hbZyJ3KRuFvdy5QBxvE9KwK17hzkAUkQHZTxPbiWffE`;
    const noncekeypairjs = `const connection = new Connection(
    clusterApiUrl('devnet'),
    'confirmed',
  );
  
  const onlineAccount = Keypair.generate();
  const nonceAccount = Keypair.generate();
  
  const minimumAmount = await connection.getMinimumBalanceForRentExemption(
    NONCE_ACCOUNT_LENGTH,
  );
  
  // Form CreateNonceAccount transaction
  const transaction = new Transaction()
    .add(
    SystemProgram.createNonceAccount({
      fromPubkey: onlineAccount.publicKey,
      noncePubkey: nonceAccount.publicKey,
      authorizedPubkey: onlineAccount.publicKey,
      lamports: minimumAmount,
    }),
  );
  
  await web3.sendAndConfirmTransaction(connection, transaction, [onlineAccount, nonceAccount])
  
  const nonceAccountData = await connection.getNonce(
    nonceAccount.publicKey,
    'confirmed',
  );
  
  console.log(nonceAccountData);
  /*
  NonceAccount {
    authorizedPubkey: '5hbZyJ3KRuFvdy5QBxvE9KwK17hzkAUkQHZTxPbiWffE'
    nonce: '6DPt2TfFBG7sR4Hqu16fbMXPj8ddHKkbU4Y3EEEWrC2E',
    feeCalculator: { lamportsPerSignature: 5000 }
  }
   */`;
    const blockhash = `$ spl-token mint 4VNVRJetwapjwYU8jf4qPgaCeD76wyz8DuNj8yMCQ62o 1 EX8zyi2ZQUuoYtXd4MKmyHYLTjqFdWeuoTHcsTdJcKHC \
    --owner 46ed77fd4WTN144q62BwjU2B3ogX3Xmmc8PT5Z3Xc2re \
    --multisig-signer BzWpkuRrwXHq4SSSFHa8FJf6DRQy4TaeoXnkA89vTgHZ \
    --multisig-signer DhkUfKgfZ8CF6PAGKwdABRL1VqkeNrTSRx8LZfpPFVNY \
    --blockhash 6DPt2TfFBG7sR4Hqu16fbMXPj8ddHKkbU4Y3EEEWrC2E \
    --fee-payer 5hbZyJ3KRuFvdy5QBxvE9KwK17hzkAUkQHZTxPbiWffE \
    --nonce Fjyud2VXixk2vCs4DkBpfpsq48d81rbEzh6deKt7WvPj \
    --nonce-authority 5hbZyJ3KRuFvdy5QBxvE9KwK17hzkAUkQHZTxPbiWffE \
    --sign-only \
    --mint-decimals 9`;
    const blockhash2 = `Minting 1 tokens
    Token: 4VNVRJetwapjwYU8jf4qPgaCeD76wyz8DuNj8yMCQ62o
    Recipient: EX8zyi2ZQUuoYtXd4MKmyHYLTjqFdWeuoTHcsTdJcKHC
  
  Blockhash: 6DPt2TfFBG7sR4Hqu16fbMXPj8ddHKkbU4Y3EEEWrC2E
  Absent Signers (Pubkey):
   5hbZyJ3KRuFvdy5QBxvE9KwK17hzkAUkQHZTxPbiWffE
   BzWpkuRrwXHq4SSSFHa8FJf6DRQy4TaeoXnkA89vTgHZ
   DhkUfKgfZ8CF6PAGKwdABRL1VqkeNrTSRx8LZfpPFVNY`;
    const blockhash3 = `$ spl-token mint 4VNVRJetwapjwYU8jf4qPgaCeD76wyz8DuNj8yMCQ62o 1 EX8zyi2ZQUuoYtXd4MKmyHYLTjqFdWeuoTHcsTdJcKHC \
   --owner 46ed77fd4WTN144q62BwjU2B3ogX3Xmmc8PT5Z3Xc2re \
   --multisig-signer signer-1.json \
   --multisig-signer DhkUfKgfZ8CF6PAGKwdABRL1VqkeNrTSRx8LZfpPFVNY \
   --blockhash 6DPt2TfFBG7sR4Hqu16fbMXPj8ddHKkbU4Y3EEEWrC2E \
   --fee-payer 5hbZyJ3KRuFvdy5QBxvE9KwK17hzkAUkQHZTxPbiWffE \
   --nonce Fjyud2VXixk2vCs4DkBpfpsq48d81rbEzh6deKt7WvPj \
   --nonce-authority 5hbZyJ3KRuFvdy5QBxvE9KwK17hzkAUkQHZTxPbiWffE \
   --sign-only \
   --mint-decimals 9`;
    const blockhash4 = `Minting 1 tokens
Token: 4VNVRJetwapjwYU8jf4qPgaCeD76wyz8DuNj8yMCQ62o
Recipient: EX8zyi2ZQUuoYtXd4MKmyHYLTjqFdWeuoTHcsTdJcKHC

Blockhash: 6DPt2TfFBG7sR4Hqu16fbMXPj8ddHKkbU4Y3EEEWrC2E
Signers (Pubkey=Signature):
BzWpkuRrwXHq4SSSFHa8FJf6DRQy4TaeoXnkA89vTgHZ=2QVah9XtvPAuhDB2QwE7gNaY962DhrGP6uy9zeN4sTWvY2xDUUzce6zkQeuT3xg44wsgtUw2H5Rf8pEArPSzJvHX
Absent Signers (Pubkey):
5hbZyJ3KRuFvdy5QBxvE9KwK17hzkAUkQHZTxPbiWffE
DhkUfKgfZ8CF6PAGKwdABRL1VqkeNrTSRx8LZfpPFVNY`;
    const blockhash5 = `Minting 1 tokens
Token: 4VNVRJetwapjwYU8jf4qPgaCeD76wyz8DuNj8yMCQ62o
Recipient: EX8zyi2ZQUuoYtXd4MKmyHYLTjqFdWeuoTHcsTdJcKHC
Signature: 2AhZXVPDBVBxTQLJohyH1wAhkkSuxRiYKomSSXtwhPL9AdF3wmhrrJGD7WgvZjBPLZUFqWrockzPp9S3fvzbgicy`;
    const blockhash6 = `Minting 1 tokens
Token: 4VNVRJetwapjwYU8jf4qPgaCeD76wyz8DuNj8yMCQ62o
Recipient: EX8zyi2ZQUuoYtXd4MKmyHYLTjqFdWeuoTHcsTdJcKHC

Blockhash: 6DPt2TfFBG7sR4Hqu16fbMXPj8ddHKkbU4Y3EEEWrC2E
Signers (Pubkey=Signature):
DhkUfKgfZ8CF6PAGKwdABRL1VqkeNrTSRx8LZfpPFVNY=2brZbTiCfyVYSCp6vZE3p7qCDeFf3z1JFmJHPBrz8SnWSDZPjbpjsW2kxFHkktTNkhES3y6UULqS4eaWztLW7FrU
Absent Signers (Pubkey):
5hbZyJ3KRuFvdy5QBxvE9KwK17hzkAUkQHZTxPbiWffE
BzWpkuRrwXHq4SSSFHa8FJf6DRQy4TaeoXnkA89vTgHZ`

    const blockhash7 = `$ spl-token mint 4VNVRJetwapjwYU8jf4qPgaCeD76wyz8DuNj8yMCQ62o 1 EX8zyi2ZQUuoYtXd4MKmyHYLTjqFdWeuoTHcsTdJcKHC \
    --owner 46ed77fd4WTN144q62BwjU2B3ogX3Xmmc8PT5Z3Xc2re \
    --multisig-signer BzWpkuRrwXHq4SSSFHa8FJf6DRQy4TaeoXnkA89vTgHZ \
    --multisig-signer DhkUfKgfZ8CF6PAGKwdABRL1VqkeNrTSRx8LZfpPFVNY \
    --blockhash 6DPt2TfFBG7sR4Hqu16fbMXPj8ddHKkbU4Y3EEEWrC2E \
    --fee-payer hot-wallet.json \
    --nonce Fjyud2VXixk2vCs4DkBpfpsq48d81rbEzh6deKt7WvPj \
    --nonce-authority hot-wallet.json \
    --signer BzWpkuRrwXHq4SSSFHa8FJf6DRQy4TaeoXnkA89vTgHZ=2QVah9XtvPAuhDB2QwE7gNaY962DhrGP6uy9zeN4sTWvY2xDUUzce6zkQeuT3xg44wsgtUw2H5Rf8pEArPSzJvHX \
    --signer DhkUfKgfZ8CF6PAGKwdABRL1VqkeNrTSRx8LZfpPFVNY=2brZbTiCfyVYSCp6vZE3p7qCDeFf3z1JFmJHPBrz8SnWSDZPjbpjsW2kxFHkktTNkhES3y6UULqS4eaWztLW7FrU`;
    const blockhash8 = `Minting 1 tokens
    Token: 4VNVRJetwapjwYU8jf4qPgaCeD76wyz8DuNj8yMCQ62o
    Recipient: EX8zyi2ZQUuoYtXd4MKmyHYLTjqFdWeuoTHcsTdJcKHC
  Signature: 2AhZXVPDBVBxTQLJohyH1wAhkkSuxRiYKomSSXtwhPL9AdF3wmhrrJGD7WgvZjBPLZUFqWrockzPp9S3fvzbgicy`;

    const blockhashjs = `const nonceAccountInfo = await connection.getAccountInfo(
    nonceAccount.publicKey,
    'confirmed'
  );
  
  const nonceAccountFromInfo = web3.NonceAccount.fromAccountData(nonceAccountInfo.data);
  
  console.log(nonceAccountFromInfo);
  
  const nonceInstruction = web3.SystemProgram.nonceAdvance({
    authorizedPubkey: onlineAccount.publicKey,
    noncePubkey: nonceAccount.publicKey
  });
  
  const nonce = nonceAccountFromInfo.nonce;
  
  const mintToTransaction = new web3.Transaction({
    feePayer: onlineAccount.publicKey,
    nonceInfo: {nonce, nonceInstruction}
  })
    .add(
      createMintToInstruction(
        mint,
        associatedTokenAccount.address,
        multisigkey,
        1,
        [
          signer1,
          onlineAccount
        ],
        TOKEN_PROGRAM_ID
      )
    );`;

    const blockhashjs2 = `let mintToTransactionBuffer = mintToTransaction.serializeMessage();

    let onlineSIgnature = nacl.sign.detached(mintToTransactionBuffer, onlineAccount.secretKey);
    mintToTransaction.addSignature(onlineAccount.publicKey, onlineSIgnature);
    
    // Handed to offline signer for signature
    let offlineSignature = nacl.sign.detached(mintToTransactionBuffer, signer1.secretKey);
    mintToTransaction.addSignature(signer1.publicKey, offlineSignature);
    
    let rawMintToTransaction = mintToTransaction.serialize();`;
    const blockhashjs3 = `// Send to online signer for broadcast to network
    await web3.sendAndConfirmRawTransaction(connection, rawMintToTransaction);`;
    const findingalltoken = `curl http://api.mainnet-beta.En Comt.com -X POST -H "Content-Type: application/json" -d '
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getProgramAccounts",
  "params": [
    "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
    {
      "encoding": "jsonParsed",
      "filters": [
        {
          "dataSize": 165
        },
        {
          "memcmp": {
            "offset": 0,
            "bytes": "TESTpKgj42ya3st2SQTKiANjTBmncQSCqLAZGcSPLGM"
          }
        }
      ]
    }
  ]
}
'`;
    const findingalltokenwallet = `curl http://api.mainnet-beta.En Comt.com -X POST -H "Content-Type: application/json" -d '
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getProgramAccounts",
  "params": [
    "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
    {
      "encoding": "jsonParsed",
      "filters": [
        {
          "dataSize": 165
        },
        {
          "memcmp": {
            "offset": 32,
            "bytes": "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg"
          }
        }
      ]
    }
  ]
}
'`


    const handleClick = () => {
        console.log(!isSidebar)
        return setIsSidebar(!isSidebar)
    };
    useEffect(() => {
        if (window.innerWidth <= 760) {
            setIsSidebar(true);
        }
    }, [])
    return (
        <>
            <div className="container-fluid p-0">
                <NavBarDoc handleClick={handleClick} />
                <div className="row m-0 justify-content-center" >
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="sidebar-doc" style={{ left: isSidebar ? '-425px' : '0px' }}>
                            <SideBarDoc />
                        </div>
                    </div>
                    <div className={isSidebar ? "col-lg-12 col-md-12 col-sm-12 col-xs-12   " :
                        " col-lg-8 col-md-8 col-sm-12 col-xs-12 "}>
                        <div className="container px-md-3 px-lg-3">
                            <header className="mt-5 mb-4">
                                <h1 className="fs-1">Token Program</h1>
                            </header>
                            <p>A Token program on the En Comt blockchain.</p>
                            <p>This program defines a common implementation for Fungible and Non Fungible tokens.</p>
                            <h2 className="mt-4" id="background">Background<a class="hash-link" href="#background" title="Direct link to heading">​</a></h2>
                            <p>En Comt's programming model and the definitions of the En Comt terms used in this document are available at:</p>
                            <h2 className="mt-4" id="source">Source<a class="hash-link" href="#source" title="Direct link to heading">​</a></h2>
                            <p className="d-flex gap-2">The Token Program's source is available on<a target="_blank" rel="noopener noreferrer"></a></p>
                            <h2 class="mt-5" id="interface">Interface<a class="hash-link" href="#interface" title="Direct link to heading">​</a></h2>
                            <p>The Token Program is written in Rust and available on <a href="" target="_blank" rel="noopener noreferrer"></a><a href="" target="_blank" rel="noopener noreferrer"></a>.</p>
                            <p>Auto-generated C bindings are also available<a href="" target="_blank" rel="noopener noreferrer"></a></p>
                            <p><a className="text-white" target="_blank" rel="noopener noreferrer">JavaScript bindings</a> are available that support loading the Token Program on to a chain and issue instructions.</p>
                            <p>See the <a>SPL Associated Token Account</a> program for convention around wallet address to token account mapping and funding.</p>
                            <h2 className="mt-4" id="reference-guide">Reference Guide<a class="hash-link" href="#reference-guide" title="Direct link to heading">​</a></h2>
                            <h3 class="mt-4" id="setup">Setup<a class="hash-link" href="#setup" title="Direct link to heading">​</a></h3>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}>
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <p>The <code>spl-token</code> command-line utility can be used to experiment with SPL tokens.  Once you have <a>Rust installed</a>, run:</p>
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {codeString}
                                        </SyntaxHighlighter>
                                        <p>Run <code>spl-token --help</code> for a full description of available commands.</p>
                                        <h3 class="mt-4" id="configuration">Configuration<a class="hash-link" href="#configuration" title="Direct link to heading">​</a></h3>
                                        <p>The <code>spl-token</code> configuration is shared with the <code>En Comt</code> command-line tool.</p>
                                        <h4 class="mt-4" id="current-configuration">Current Configuration<a class="hash-link" href="#current-configuration" title="Direct link to heading">​</a></h4>
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {currentconfig}
                                        </SyntaxHighlighter>
                                        <h4 class="mt-4" id="cluster-rpc-url">Cluster RPC URL<a class="hash-link" href="#cluster-rpc-url" title="Direct link to heading">​</a></h4>
                                        <p>See <a target="_blank" rel="noopener noreferrer">En Comt clusters</a> for cluster-specific RPC URLs</p>
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {clusterurl}
                                        </SyntaxHighlighter>
                                        <h4 class="mt-4" id="default-keypair">Default Keypair<a class="hash-link" href="#default-keypair" title="Direct link to heading">​</a></h4>
                                        <p>See <a target="_blank" rel="noopener noreferrer">Keypair conventions</a>for information on how to setup a keypair if you don't already have one.</p>
                                        <p>Keypair File</p>
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {keypair}
                                        </SyntaxHighlighter>
                                        <p className="mt-4">Hardware Wallet URL (See <a target="_blank" rel="noopener noreferrer">URL spec</a>)</p>
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {hardwareurl}
                                        </SyntaxHighlighter>
                                        <h4 class="mt-4" id="airdrop-sol">Airdrop SOL<a class="hash-link" href="#airdrop-sol" title="Direct link to heading">​</a></h4>
                                        <p class="content-justify">Creating tokens and accounts requires SOL for account rent deposits and
                                            transaction fees. If the cluster you are targeting offers a faucet, you can get
                                            a little SOL for testing:</p>


                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <h4 class="mt-4" id="yarn">Yarn<a class="hash-link" href="#yarn" title="Direct link to heading">​</a></h4>
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {yarn}
                                        </SyntaxHighlighter>
                                        <h4 class="mt-4" id="yarn">Npm<a class="hash-link" href="#yarn" title="Direct link to heading">​</a></h4>
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {npm}
                                        </SyntaxHighlighter>
                                        <h3 class="mt-4" id="configuration-1">Configuration<a class="hash-link" href="#configuration-1" title="Direct link to heading">​</a></h3>
                                        <p>You can connect to different clusters using <code>Connection</code> in <code>@En Comt/web3.js</code></p>
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {configjs}
                                        </SyntaxHighlighter>
                                        <h3 class="mt-4" id="keypair">Keypair<a class="hash-link" href="#keypair" title="Direct link to heading">​</a></h3>
                                        <p>You can either get your keypair using <a target="_blank" rel="noopener noreferrer"><code>Keypair</code></a> from <code>@En Comt/web3.js</code>, or let the user's wallet handle the keypair and use <code>sendTransaction</code> from <a target="_blank" rel="noopener noreferrer"><code>wallet-adapter</code></a></p>
                                        <h4 class="mt-4" id="airdrop-sol">Airdrop SOL<a class="hash-link" href="#airdrop-sol" title="Direct link to heading">​</a></h4>
                                        <p>Creating tokens and accounts requires SOL for account rent deposits and
                                            transaction fees. If the cluster you are targeting offers a faucet, you can get
                                            a little SOL for testing:</p>

                                    </div>
                                </Tab>
                            </Tabs>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {airdrop}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {airdropjs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <h3 class="mt-4" id="example-creating-your-own-fungible-token">Example: Creating your own fungible token<a class="hash-link" href="#example-creating-your-own-fungible-token" title="Direct link to heading">​</a></h3>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {fungibletoken}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {fungibletokenjs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <p>The unique identifier of the token is <code>AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM</code>.</p>
                            <p>Tokens when initially created by <code>spl-token</code> have no supply:</p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {spltoken}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {spltokenjs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <p>Let's mint some.  First create an account to hold a balance of the new
                                <br></br> <code>AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM</code> token:</p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {splcreateaccount}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {splcreateaccountjs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <p><code>7UX2i7SucgLMQcfZ75s3VXmZZY4YRUyJN9X1RgfMoDUi</code> <br></br> is now an empty account:</p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {spltokenbalance}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {spltokenbalancejs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <p>Mint 100 tokens into the account:</p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {spltokenmint}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {spltokenmintjs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <p>The token <code>supply</code> and account <code>balance</code> now reflect the result of minting:</p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {spltokesupply}
                                        </SyntaxHighlighter>
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {spltoken_balance}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {spltokenmintinfojs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <h3 class="mt-5" id="example-view-all-tokens-that-you-own">Example: View all Tokens that you own<a class="hash-link" href="#example-view-all-tokens-that-you-own" title="Direct link to heading">​</a></h3>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {viewtoken}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {viewtokenjs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <h3 class="mt-5" id="example-wrapping-sol-in-a-token">Example: Wrapping SOL in a Token<a class="hash-link" href="#example-wrapping-sol-in-a-token" title="Direct link to heading">​</a></h3>
                            <p>When you want to wrap SOL, you can send SOL to an associated token account
                                on the native mint and call <code>syncNative</code>. <code>syncNative</code> updates the <code>amount</code>
                                field on the token account to match the amount of wrapped SOL available.
                                That SOL is only retrievable by closing the token account and choosing
                                the desired address to send the token account's lamports.
                            </p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {tokenwrap}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {tokenwrapjs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <p>To unwrap the Token back to SOL:</p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {tokenunwrap}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {tokenunwrapjs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <p><em>Note</em>: Some lamports were removed for transaction fees</p>
                            <h3 class="mt-5" id="example-transferring-tokens-to-another-user">Example: Transferring tokens to another user<a class="hash-link" href="#example-transferring-tokens-to-another-user" title="Direct link to heading">​</a></h3>
                            <p>First the receiver uses <code>spl-token create-account</code> to create their associated
                                token account for the Token type.  Then the receiver obtains their wallet
                                address by running <code>En Comt address</code> and provides it to the sender.</p>
                            <p>The sender then runs:</p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {tokentransfer}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {tokentransferjs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <h3 class="mt-5" id="example-transferring-tokens-to-another-user-with-sender-funding">Example: Transferring tokens to another user, with sender-funding<a class="hash-link" href="#example-transferring-tokens-to-another-user-with-sender-funding" title="Direct link to heading">​</a></h3>
                            <p>If the receiver does not yet have an associated token account, the sender may
                                choose to fund the receiver's account.</p>
                            <p>The receiver obtains their wallet address by running <code>En Comt address</code> and provides it to the sender.</p>
                            <p>The sender then runs to fund the receiver's associated token account, at the
                                sender's expense, and then transfers 50 tokens into it:</p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {tokentransferfund}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {tokentransferfundjs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <h3 class="mt-5" id="example-transferring-tokens-to-an-explicit-recipient-token-account">Example: Transferring tokens to an explicit recipient token account<a class="hash-link" href="#example-transferring-tokens-to-an-explicit-recipient-token-account" title="Direct link to heading">​</a></h3>
                            <p>Tokens may be transferred to a specific recipient token account.  The recipient
                                token account must already exist and be of the same Token type.</p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {explicitrecipient}
                                        </SyntaxHighlighter>
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {explicitrecipient2}
                                        </SyntaxHighlighter>
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {explicitrecipient3}
                                        </SyntaxHighlighter>
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {explicitrecipient4}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {explicitrecipientjs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <h3 class="mt-5" id="example-create-a-non-fungible-token">Example: Create a non-fungible token<a class="hash-link" href="#example-create-a-non-fungible-token" title="Direct link to heading">​</a></h3>
                            <p>Create the token type with zero decimal place,</p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {nonfungibletoken}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {nonfungibletokenjs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <p>then create an account to hold tokens of this new type:</p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {holdtokens}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {holdtokensjs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <p>Now mint only one token into the account,</p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {tokenmintonly}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {tokenmintonlyjs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <p>and disable future minting:</p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {futureminting}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {futuremintingjs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <p>Now the <code>7KqpRwzkkeweW5jQoETyLzhvs9rcCj9dVQ1MnzudirsM</code> account holds the
                                one and only <code>559u4Tdr9umKwft3yHMsnAxohhzkFnUBPAFtibwuZD9z</code> token:</p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {accountholds}
                                        </SyntaxHighlighter>
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {accountholds2}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {accountholdsjs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <h3 class="mt-5" id="multisig-usage">Multisig usage<a class="hash-link" href="#multisig-usage" title="Direct link to heading">​</a></h3>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <p>The main difference in <code>spl-token</code> command line usage when referencing multisig
                                            accounts is in specifying the <code>--owner</code> argument. Typically the signer specified
                                            by this argument directly provides a signature granting its authority, but in
                                            the multisig case it just points to the address of the multisig account.
                                            Signatures are then provided by the multisig signer-set members specified by the
                                            <code>--multisig-signer</code> argument.</p>
                                        <p>Multisig accounts can be used for any authority on an SPL Token mint or token account.</p>
                                        <ul>
                                            <li className="token-li">Mint account mint authority:<code>spl-token mint ...</code>,<code>spl-token authorize ... mint ...</code></li>
                                            <li className="token-li">Mint account freeze authority:<code>spl-token freeze ...</code>,<code>spl-token thaw ...</code>,<code>spl-token authorize ... freeze ...</code></li>
                                            <li className="token-li">Token account owner authority:<code>spl-token transfer ...</code>,<code>spl-token approve ...</code>,<code>spl-token revoke ...</code>,<code>spl-token burn ...</code>,<code>spl-token wrap ...</code>,<code>spl-token unwrap ...</code>,<code>spl-token authorize ... owner ...</code></li>
                                            <li className="token-li">Token account close authority:<code>spl-token close ...</code>,<code>spl-token authorize ... close ...</code></li>
                                        </ul>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <p>The main difference in using multisign is specifying the owner as the multisig key,
                                            and giving the list of signers when contructing a transaction. Normally you would
                                            provide the signer that has authority to run the transaction as the owner, but in
                                            the multisig case the owner would be the multisig key.</p>
                                        <p>Multisig accounts can be used for any authority on an SPL Token mint or token account.</p>
                                        <ul>
                                            <li className="token-li">Mint account mint authority:<code>createMint(/* ... */, mintAuthority: multisigKey, /* ... */)</code></li>
                                            <li className="token-li">Mint account freeze authority:<code>createMint(/* ... */, freezeAuthority: multisigKey, /* ... */)</code></li>
                                            <li className="token-li">Token account owner authority:<code>getOrCreateAssociatedTokenAccount(/* ... */, mintAuthority: multisigKey, /* ... */)</code></li>
                                            <li className="token-li">Token account close authority:<code>closeAccount(/* ... */, authority: multisigKey, /* ... */)</code></li>
                                        </ul>
                                    </div>
                                </Tab>
                            </Tabs>
                            <h3 class="mt-4" id="example-mint-with-multisig-authority">Example: Mint with multisig authority<a class="hash-link" href="#example-mint-with-multisig-authority" title="Direct link to heading">​</a></h3>
                            <p>First create keypairs to act as the multisig signer-set. In reality, these can
                                be any supported signer, like: a Ledger hardware wallet, a keypair file, or
                                a paper wallet. For convenience, generated keypairs will be used in this example.</p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {multisigauthority}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {multisigauthorityjs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <p>In order to create the multisig account, the public keys of the signer-set must be collected.</p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {ordertocreate}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {ordertocreatejs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <p>Now the multisig account can be created with the <code>spl-token create-multisig</code>
                                subcommand. Its first positional argument is the minimum number of signers (<code>M</code>)
                                that must sign a transaction affecting a token/mint account that is controlled
                                by this multisig account. The remaining positional arguments are the public keys
                                of all keypairs allowed (<code>N</code>) to sign for the multisig account. This example
                                will use a "2 of 3" multisig account.  That is, two of the three allowed keypairs
                                must sign all transactions.</p>
                            <p>NOTE: SPL Token Multisig accounts are limited to a signer-set of eleven signers
                                (1 &lt;= <code>N</code> &lt;= 11) and minimum signers must be no more than <code>N</code> (1 &lt;= <code>M</code> &lt;= <code>N</code>)</p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {createmultisig2}
                                        </SyntaxHighlighter>
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {createmultisig3}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {createmultisig2js}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <p>Next create the token mint and receiving accounts <a>as previously described</a> and set the mint account's minting authority to the multisig account</p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {receivingaccounts}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {receivingaccountsjs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <p>To demonstrate that the mint account is now under control of the multisig account, attempting to mint with one multisig signer fails</p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {multisigsigner}
                                        </SyntaxHighlighter>
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {multisigsigner2}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {multisigsignerjs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <p>But repeating with a second multisig signer, succeeds</p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {repeatingmultisig}
                                        </SyntaxHighlighter>
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {repeatingmultisig2}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {repeatingmultisigjs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <h3 class="mt-5" id="example-offline-signing-with-multisig">Example: Offline signing with multisig<a class="hash-link" title="Direct link to heading">​</a></h3>
                            <p>Sometimes online signing is not possible or desireable. Such is the case for example when signers are not in the same geographic location
                                or when they use air-gapped devices not connected to the network.  In this case, we use offline signing which combines the
                                previous examples of <a >multisig</a> with <a target="_blank" rel="noopener noreferrer">offline signing</a>
                                and a <a target="_blank" rel="noopener noreferrer">nonce account</a>.</p>
                            <p>This example will use the same mint account, token account, multisig account,
                                and multisig signer-set keypair filenames as the online example, as well as a nonce
                                account that we create here:</p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {noncekeypair}
                                        </SyntaxHighlighter>
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {noncekeypair2}
                                        </SyntaxHighlighter>
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {noncekeypair3}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {noncekeypairjs}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <p>For the fee-payer and nonce-authority roles, a local hot wallet at <code>5hbZyJ3KRuFvdy5QBxvE9KwK17hzkAUkQHZTxPbiWffE</code> will be used.</p>
                            <Tabs
                                activeTab="1"
                                className=""
                                ulClassName=""
                                activityClassName="bg-success"
                                onClick={(event, tab) => console.log(event, tab)}
                            >
                                <Tab title="CLI" className="mr-3">
                                    <div className="mt-3">
                                        <p>First a template command is built by specifying all signers by their public
                                            key. Upon running this command, all signers will be listed as "Absent Signers"
                                            in the output. This command will be run by each offline signer to generate the
                                            corresponding signature.</p>
                                        <p>NOTE: The argument to the <code>--blockhash</code> parameter is the "Nonce blockhash:" field from
                                            the designated durable nonce account.</p>
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {blockhash}
                                        </SyntaxHighlighter>
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {blockhash2}
                                        </SyntaxHighlighter>
                                        Next each offline signer executes the template command, replacing each instance of their public key with the corresponding keypair.
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {blockhash3}
                                        </SyntaxHighlighter>
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {blockhash4}
                                        </SyntaxHighlighter>
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {blockhash5}
                                        </SyntaxHighlighter>
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {blockhash6}
                                        </SyntaxHighlighter>
                                        <p>Finally, the offline signers communicate the <code>Pubkey=Signature</code> pair from the
                                            output of their command to the party who will broadcast the transaction to the
                                            cluster. The broadcasting party then runs the template command after modifying
                                            it as follows:</p>
                                        <ol>
                                            <li className="order-li">Replaces any corresponding public keys with their keypair (<code>--fee-payer ...</code>and <code>--nonce-authority ...</code> in this example)</li>
                                            <li className="order-li">Removes the <code>--sign-only</code> argument, and in the case of the <code>mint</code> subcommand,the <code>--mint-decimals ...</code> argument as it will be queried from the cluster</li>
                                            <li className="order-li">Adds the offline signatures to the template command via the <code>--signer</code> argument</li>
                                        </ol>
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {blockhash7}
                                        </SyntaxHighlighter>
                                        <SyntaxHighlighter language="js" style={dark}
                                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                                            wrapLongLines={true}
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {blockhash8}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                                <Tab title="JS" className="mr-3">
                                    <div className="mt-3">
                                        <p>First a raw transaction is built using the nonceAccountInformation and tokenAccount key.
                                            All signers of the transaction are noted as part of the raw transaction. This transaction
                                            will be handed to the signers later for signing.</p>
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {blockhashjs}
                                        </SyntaxHighlighter>
                                        <p>Next each offline signer will take the transaction buffer and sign it with their corresponding key.</p>
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {blockhashjs2}
                                        </SyntaxHighlighter>
                                        <p>Finally, the hot wallet will take the transaction, serialize it, and broadcast it to the network.</p>
                                        <SyntaxHighlighter language="js" style={dark}
                                            wrapLongLines
                                            customStyle={{
                                                backgroundColor: "BLACK",
                                                borderColor: "BLACK",
                                                color: "#fff",
                                            }} >
                                            {blockhashjs3}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab>
                            </Tabs>
                            <h2 class="mt-5" id="json-rpc-methods">JSON RPC methods<a class="hash-link" href="#json-rpc-methods" title="Direct link to heading">​</a></h2>
                            <p>There is a rich set of JSON RPC methods available for use with SPL Token:</p>
                            <ul>
                                <li className="token-li"><code>getTokenAccountBalance</code></li>
                                <li className="token-li"><code>getTokenAccountsByDelegate</code></li>
                                <li className="token-li"><code>getTokenAccountsByOwner</code></li>
                                <li className="token-li"><code>getTokenLargestAccounts</code></li>
                                <li className="token-li"><code>getTokenSupply</code></li>
                            </ul>
                            <p>See <a href="" target="_blank" rel="noopener noreferrer"></a> for more details.</p>
                            <p>Additionally the versatile <code>getProgramAccounts</code> JSON RPC method can be employed in various ways to fetch SPL Token accounts of interest.</p>
                            <h3 class="mt-5" id="finding-all-token-accounts-for-a-specific-mint">Finding all token accounts for a specific mint<a class="hash-link" href="#finding-all-token-accounts-for-a-specific-mint" title="Direct link to heading">​</a></h3>
                            <p>To find all token accounts for the <code>TESTpKgj42ya3st2SQTKiANjTBmncQSCqLAZGcSPLGM</code> mint:</p>
                            <SyntaxHighlighter language="js" style={dark}
                                wrapLongLines
                                customStyle={{
                                    backgroundColor: "BLACK",
                                    borderColor: "BLACK",
                                    color: "#fff",
                                }} >
                                {findingalltoken}
                            </SyntaxHighlighter>
                            <p>The <code>"dataSize": 165</code> filter selects all <a href="" target="_blank" rel="noopener noreferrer">Token  Account </a>s,and then the <code>"memcmp": ...</code> filter selects based on the
                                <a target="_blank" rel="noopener noreferrer">mint</a>address within each token account.</p>

                            <h3 class="mt-5" id="finding-all-token-accounts-for-a-wallet">Finding all token accounts for a wallet<a class="hash-link" href="#finding-all-token-accounts-for-a-wallet" title="Direct link to heading">​</a></h3>
                            <p>Find all token accounts owned by the <code>vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg</code> user:</p>
                            <SyntaxHighlighter language="js" style={dark}
                                wrapLongLines
                                customStyle={{
                                    backgroundColor: "BLACK",
                                    borderColor: "BLACK",
                                    color: "#fff",
                                }} >
                                {findingalltokenwallet}
                            </SyntaxHighlighter>

                            <p>The <code>"dataSize": 165</code> filter selects all <a href="" target="_blank" rel="noopener noreferrer">Token Account </a>s, and then the <code>"memcmp": ...</code> filter selects based on the<a href="" target="_blank" rel="noopener noreferrer"> owner </a> address within each token account.</p>
                            <h2 class="mt-5" id="operational-overview">Operational overview<a class="hash-link" href="#operational-overview" title="Direct link to heading">​</a></h2>
                            <h3 class="mt-3" id="creating-a-new-token-type">Creating a new token type<a class="hash-link" href="#creating-a-new-token-type" title="Direct link to heading">​</a></h3>
                            <p className="mt-4">A new token type can be created by initializing a new Mint with the <code>InitializeMint</code> instruction. The Mint is used to create or "mint" new tokens, and these tokens are stored in Accounts. A Mint is associated with each Account, which means that the total supply of a particular token type is equal to the balances of all the associated Accounts.</p>
                            <p>It's important to note that the <code>InitializeMint</code> instruction does not require the En Comt account being initialized also be a signer. The <code>InitializeMint</code> instruction should be atomically processed with the system instruction that creates the En Comt account by including both instructions in the same transaction.</p>
                            <p>Once a Mint is initialized, the <code>mint_authority</code> can create new tokens using the<code>MintTo</code> instruction.  As long as a Mint contains a valid <code>mint_authority</code>, the Mint is considered to have a non-fixed supply, and the <code>mint_authority</code> can create new tokens with the <code>MintTo</code> instruction at any time.  The <code>SetAuthority</code> instruction can be used to irreversibly set the Mint's authority to <code>None</code>, rendering the Mint's supply fixed.  No further tokens can ever be Minted.</p>
                            <p>Token supply can be reduced at any time by issuing a <code>Burn</code> instruction which removes and discards tokens from an Account.</p>
                            <h3 class="mt-5" id="creating-accounts">Creating accounts<a class="hash-link" href="#creating-accounts" title="Direct link to heading">​</a></h3>
                            <p className="mt-4">Accounts hold token balances and are created using the <code>InitializeAccount</code> instruction. Each Account has an owner who must be present as a signer in some instructions.</p>
                            <p>An Account's owner may transfer ownership of an account to another using the <code>SetAuthority</code> instruction.</p>
                            <p>It's important to note that the <code>InitializeAccount</code> instruction does not require the En Comt account being initialized also be a signer. The <code>InitializeAccount</code>instruction should be atomically processed with the system instruction that creates the En Comt account by including both instructions in the same transaction.</p>
                            <h3 class="mt-4" id="transferring-tokens">Transferring tokens<a class="hash-link" href="#transferring-tokens" title="Direct link to heading">​</a></h3>
                            <p>Balances can be transferred between Accounts using the <code>Transfer</code> instruction.The owner of the source Account must be present as a signer in the <code>Transfer</code> instruction when the source and destination accounts are different.</p>
                            <p>It's important to note that when the source and destination of a <code>Transfer</code> are
                                the <strong>same</strong>, the <code>Transfer</code> will <em>always</em> succeed. Therefore, a successful <code>Transfer</code>
                                does not necessarily imply that the involved Accounts were valid SPL Token
                                accounts, that any tokens were moved, or that the source Account was present as
                                a signer. We strongly recommend that developers are careful about checking that
                                the source and destination are <strong>different</strong> before invoking a <code>Transfer</code>
                                instruction from within their program.</p>
                            <h3 class="mt-4" id="burning">Burning<a class="hash-link" href="#burning" title="Direct link to heading">​</a></h3>
                            <p>The <code>Burn</code> instruction decreases an Account's token balance without transferring to another Account, effectively removing the token from circulation permanently.</p>
                            <p>There is no other way to reduce supply on chain. This is similar to transferring to an account with unknown private key or destroying a private key. But the act of burning by using <code>Burn</code> instructions is more explicit and can be confirmed on chain by any parties.</p>
                            <h3 class="mt-4" id="authority-delegation">Authority delegation<a class="hash-link" href="#authority-delegation" title="Direct link to heading">​</a></h3>
                            <p>Account owners may delegate authority over some or all of their token balance using the <code>Approve</code> instruction. Delegated authorities may transfer or burn up to the amount they've been delegated. Authority delegation may be revoked by the Account's owner via the <code>Revoke</code> instruction.</p>
                            <h3 class="mt-4" id="multisignatures">Multisignatures<a class="hash-link" href="#multisignatures" title="Direct link to heading">​</a></h3>
                            <p>M of N multisignatures are supported and can be used in place of Mint authorities or Account owners or delegates. Multisignature authorities must be initialized with the <code>InitializeMultisig</code> instruction. Initialization specifies the set of N public keys that are valid and the number M of those N that must be present as instruction signers for the authority to be legitimate.</p>
                            <p>It's important to note that the <code>InitializeMultisig</code> instruction does not require the En Comt account being initialized also be a signer. The <code>InitializeMultisig</code> instruction should be atomically processed with the system instruction that creates the En Comt account by including both instructions in the same transaction.</p>
                            <h3 class="mt-4" id="freezing-accounts">Freezing accounts<a class="hash-link" href="#freezing-accounts" title="Direct link to heading">​</a></h3>
                            <p>The Mint may also contain a <code>freeze_authority</code> which can be used to issue
                                <code>FreezeAccount</code> instructions that will render an Account unusable.  Token
                                instructions that include a frozen account will fail until the Account is thawed
                                using the <code>ThawAccount</code> instruction.  The <code>SetAuthority</code> instruction can be used
                                to change a Mint's <code>freeze_authority</code>.  If a Mint's <code>freeze_authority</code> is set to
                                <code>None</code> then account freezing and thawing is permanently disabled and all
                                currently frozen accounts will also stay frozen permanently.</p>
                            <h3 class="mt-4" id="wrapping-sol">Wrapping SOL<a class="hash-link" href="#wrapping-sol" title="Direct link to heading">​</a></h3>
                            <p>The Mint may also contain a <code>freeze_authority</code> which can be used to issue
                                <code>FreezeAccount</code> instructions that will render an Account unusable.  Token
                                instructions that include a frozen account will fail until the Account is thawed
                                using the <code>ThawAccount</code> instruction.  The <code>SetAuthority</code> instruction can be used
                                to change a Mint's <code>freeze_authority</code>.  If a Mint's <code>freeze_authority</code> is set to
                                <code>None</code> then account freezing and thawing is permanently disabled and all
                                currently frozen accounts will also stay frozen permanently.</p>
                            <h3 class="mt-4" id="wrapping-sol">Wrapping SOL<a class="hash-link" href="#wrapping-sol" title="Direct link to heading">​</a></h3>
                            <p>The Token Program can be used to wrap native SOL. Doing so allows native SOL to  be treated like any other Token program token type and can be useful when being called from other programs that interact with the Token Program's interface.</p>
                            <p>Accounts containing wrapped SOL are associated with a specific Mint called the "Native Mint" using the public key <code>So11111111111111111111111111111111111111112</code>.</p>
                            <p>These accounts have a few unique behaviors</p>
                            <ul>
                                <li className="token-li"><code>InitializeAccount</code> sets the balance of the initialized Account to the SOL balance of the En Comt account being initialized, resulting in a token balance  equal to the SOL balance.</li>
                                <li className="token-li">Transfers to and from not only modify the token balance but also transfer and equal amount of SOL from the source account to the destination account.</li>
                                <li className="token-li">Burning is not supported</li>
                                <li className="token-li">When closing an Account the balance may be non-zero.</li>
                            </ul>
                            <h3 class="mt-4" id="rent-exemption">Rent-exemption<a class="hash-link" href="#rent-exemption" title="Direct link to heading">​</a></h3>
                            <p>To ensure a reliable calculation of supply, a consistency valid Mint, and consistently valid Multisig accounts all En Comt accounts holding an Account, Mint, or Multisig must contain enough SOL to be considered <a href="" target="_blank" rel="noopener noreferrer">rent exempt</a></p>
                            <h3 class="mt-4" id="closing-accounts">Closing accounts<a class="hash-link" href="#closing-accounts" title="Direct link to heading">​</a></h3>
                            <p>An account may be closed using the <code>CloseAccount</code> instruction. When closing an Account, all remaining SOL will be transferred to another En Comt account (doesn't have to be associated with the Token Program). Non-native Accounts must have a balance of zero to be closed.</p>
                            <h3 class="mt-4" id="non-fungible-tokens">Non-Fungible tokens<a class="hash-link" href="#non-fungible-tokens" title="Direct link to heading">​</a></h3>
                            <p>An NFT is simply a token type where only a single token has been minted.</p>
                            <h2 class="mt-5" id="wallet-integration-guide">Wallet Integration Guide<a class="hash-link" href="#wallet-integration-guide" title="Direct link to heading">​</a></h2>
                            <p>This section describes how to integrate SPL Token support into an existing wallet supporting native SOL.  It assumes a model whereby the user has a single system account as their <strong>main wallet address</strong> that they send and receive SOL from.</p>
                            <p>Although all SPL Token accounts do have their own address on-chain, there's no need to surface these additional addresses to the user.</p>
                            <p>There are two programs that are used by the wallet:</p>
                            <ul>
                                <li className="token-li">SPL Token program: generic program that is used by all SPL Tokens</li>
                                <li className="token-li"><a href="/associated-token-account">SPL Associated Token Account</a> program: defines the convention and provides the mechanism for mapping the user's wallet address to the associated token accounts they hold.</li>
                            </ul>
                            <h3 class="mt-4" id="how-to-fetch-and-display-token-holdings">How to fetch and display token holdings<a class="hash-link" href="#how-to-fetch-and-display-token-holdings" title="Direct link to heading">​</a></h3>
                            <p>The <a href="" target="_blank" rel="noopener noreferrer">getTokenAccountsByOwner</a>JSON RPC method can be used to fetch all token accounts for a wallet address.</p>
                            <p>For each token mint, the wallet could have multiple token accounts: the associated token account and/or other ancillary token accounts</p>
                            <p>By convention it is suggested that wallets roll up the balances from all token accounts of the same token mint into a single balance for the user to shield the user from this complexity.</p>
                            <p>See the <a href="">Garbage Collecting Ancillary Token Accounts </a> section for suggestions on how the wallet should clean up ancillary token accounts on the user's behalf.</p>
                            <h3 class="mt-4" id="associated-token-account">Associated Token Account<a class="hash-link" href="#associated-token-account" title="Direct link to heading">​</a></h3>
                            <p>Before the user can receive tokens, their associated token account must be created on-chain, requiring a small amount of SOL to mark the account as rent-exempt.</p>
                            <p>There's no restriction on who can create a user's associated token account.It could either be created by the wallet on behalf of the user or funded by a 3rd party through an airdrop campaign.</p>
                            <p>The creation process is described <a href="">here</a>.</p>
                            <p>It's highly recommended that the wallet create the associated token account for a given SPL Token itself before indicating to the user that they are able to receive that SPL Tokens type (typically done by showing the user their receiving address). A wallet that chooses to not perform this step may limit its user's ability to receive SPL Tokens from other wallets.</p>
                            <h4 class="mt-4" id="sample-add-token-workflow">Sample "Add Token" workflow<a class="hash-link" href="#sample-add-token-workflow" title="Direct link to heading">​</a></h4>
                            <p>The user should first fund their associated token account when they want to receive SPL Tokens of a certain type to:</p>
                            <ol>
                                <li className="order-li">Maximize interoperability with other wallet implementations</li>
                                <li className="order-li">Avoid pushing the cost of creating their associated token account on the first sender</li>
                            </ol>
                            <p>The wallet should provide a UI that allow the users to "add a token".The user selects the kind of token, and is presented with information about how much SOL it will cost to add the token.</p>
                            <p>Upon confirmation, the wallet creates the associated token type as the described<a href="">here</a>.</p>
                            <h4 class="mt-4" id="sample-airdrop-campaign-workflow">Sample "Airdrop campaign" workflow<a class="hash-link" href="" title="Direct link to heading">​</a></h4>
                            <p>For each recipient wallet addresses, send a transaction containing:</p>
                            <ol>
                                <li className="order-li">Create the associated token account on the recipient's behalf.</li>
                                <li className="order-li">Use <code>TokenInstruction::Transfer</code> to complete the transfer</li>
                            </ol>
                            <h4 class="mt-4" id="associated-token-account-ownership">Associated Token Account Ownership<a class="hash-link" href="#associated-token-account-ownership" title="Direct link to heading">​</a></h4>
                            <p>⚠️ The wallet should never use <code>TokenInstruction::SetAuthority</code> to set the <code>AccountOwner</code> authority of the associated token account to another address.</p>
                            <h3 class="mt-4" id="ancillary-token-accounts">Ancillary Token Accounts<a class="hash-link" href="#ancillary-token-accounts" title="Direct link to heading">​</a></h3>
                            <p>At any time ownership of an existing SPL Token account may be assigned to the user.  One way to accomplish this is with the <code>spl-token authorize &lt;TOKEN_ADDRESS&gt; owner &lt;USER_ADDRESS&gt;</code> command.  Wallets should be prepared to gracefully manage token accounts that they themselves did not create for the user.</p>
                            <h3 class="mt-5" id="transferring-tokens-between-wallets">Transferring Tokens Between Wallets<a class="hash-link" href="#transferring-tokens-between-wallets" title="Direct link to heading">​</a></h3>
                            <p>The preferred method of transferring tokens between wallets is to transfer into associated token account of the recipient.</p>
                            <p>The recipient must provide their main wallet address to the sender.The sender then:</p>
                            <ol>
                                <li className="order-li">Derives the associated token account for the recipient</li>
                                <li className="order-li">Fetches the recipient's associated token account over RPC and checks that it exists</li>
                                <li className="order-li">If the recipient's associated token account does not yet exist, the sender wallet should create the recipient's associated token account as described <a>here</a> The sender's wallet may choose to inform the user that as a result of account creation the transfer will require more SOL than normal.However a wallet that chooses to not support creating the recipient's associated token account at this time should present a message to the user with enough information to permit them to find a workaround (such as transferring the token through a fully compliant intermediary wallet such as <a href="" target="_blank" rel="noopener noreferrer"></a>)to allow the users to accomplish their goal</li>
                                <li className="order-li">Use <code>TokenInstruction::Transfer</code> to complete the transfer</li>
                            </ol>
                            <p>The sender's wallet must not require that the recipient's main wallet address hold a balance before allowing the transfer.</p>
                            <h3 class="mt-4" id="registry-for-token-details">Registry for token details<a class="hash-link" href="#registry-for-token-details" title="Direct link to heading">​</a></h3>
                            <p>At the moment there exist two solutions for Token Mint registries:</p>
                            <ul>
                                <li className="token-li">hard coded addresses in the wallet or dapp</li>
                                <li className="token-li"><a target="_blank" rel="noopener noreferrer">spl-token-registry</a>package, maintained at <a target="_blank" rel="noopener noreferrer"></a></li>
                            </ul>
                            <p><strong>A decentralized solution is in progress.</strong></p>
                            <h3 class="mt-4" id="garbage-collecting-ancillary-token-accounts">Garbage Collecting Ancillary Token Accounts<a class="hash-link" href="#garbage-collecting-ancillary-token-accounts" title="Direct link to heading">​</a></h3>
                            <p>Wallets should empty ancillary token accounts as quickly as practical by transferring into the user's associated token account.This effort serves two purposes:</p>
                            <ul>
                                <li className="token-li">If the user is the close authority for the ancillary account, the wallet can reclaim SOL for the user by closing the account.</li>
                                <li className="token-li">If the ancillary account was funded by a 3rd party, once the account is emptied that 3rd party may close the account and reclaim the SOL.</li>
                            </ul>
                            <p>One natural time to garbage collect ancillary token accounts is when the user next sends tokens.The additional instructions to do so can be added to the existing transaction, and will not require an additional fee.</p>
                            <p>Cleanup Pseudo Steps:</p>
                            <ol>
                                <li className="order-li">For all non-empty ancillary token accounts, add a<code>TokenInstruction::Transfer</code> instruction to the transfer the full token amount to the user's associated token account.</li>
                                <li className="order-li">For all empty ancillary token accounts where the user is the close authority,add a <code>TokenInstruction::CloseAccount</code> instruction</li>
                            </ol>
                            <p>If adding one or more of clean up instructions cause the transaction to exceed the maximum allowed transaction size, remove those extra clean up instructions.They can be cleaned up during the next send operation.</p>
                            <p>The <code>spl-token gc</code> command provides an example implementation of this cleanup process.</p>
                            <h3 class="mt-4" id="token-vesting">Token Vesting<a class="hash-link" href="#token-vesting" title="Direct link to heading">​</a></h3>
                            <p>There are currently two solutions available for vesting SPL tokens:</p>
                            <h4 class="mt-3" id="1-bonfida-token-vesting">1) Bonfida token-vesting<a class="hash-link" href="#1-bonfida-token-vesting" title="Direct link to heading">​</a></h4>
                            <p>This program allows you to lock arbitrary SPL tokens and release the locked tokens with a determined unlock schedule. An <code>unlock schedule</code> is made of a <code>unix timestamp</code> and a token <code>amount</code>, when initializing a vesting contract, the creator can pass an array of <code>unlock schedule</code> with an arbitrary size giving the creator of the contract complete control of how the tokens unlock over time.</p>
                            <p>Unlocking works by pushing a permissionless crank on the contract that moves the tokens to the pre-specified address. The recipient address of a vesting contract can be modified by the owner of the current recipient key, meaning that vesting contract locked tokens can be traded.</p>
                            <ul>
                                <li className="token-li">Code: <a href="" target="_blank" rel="noopener noreferrer"></a></li>
                                <li className="token-li">UI: <a href="" target="_blank" rel="noopener noreferrer"></a></li>
                                <li className="token-li">Audit: The audit was conducted by Kudelski, the report can be found <a href="" target="_blank" rel="noopener noreferrer">here</a></li>
                            </ul>
                            <h4 class="mt-3" id="2-streamflow-timelock">2) Streamflow Timelock<a class="hash-link" href="#2-streamflow-timelock" title="Direct link to heading">​</a></h4>
                            <p>Enables creation, withdrawal, cancelation and transfer of token vesting contracts using time-based lock and escrow accounts.Contracts are by default cancelable by the creator and transferable by the recipient.</p>
                            <p>Vesting contract creator chooses various options upon creation, such as:</p>
                            <ul>
                                <li className="token-li">SPL token and amount to be vested</li>
                                <li className="token-li">recipient</li>
                                <li className="token-li">exact start and end date</li>
                                <li className="token-li">(optional) cliff date and amount</li>
                                <li className="token-li">(optional) release frequency</li>
                            </ul>
                            <p>Coming soon:</p>
                            <ul>
                                <li className="token-li">whether or not a contract is transferable by creator/recipient</li>
                                <li className="token-li">whether or not a contract is cancelable by creator/recipient</li>
                                <li className="token-li">subject/memo</li>
                            </ul>
                            <p>Resources:</p>
                            <ul>
                                <li className="token-li">Audit: Reports can be found <a href="" target="_blank" rel="noopener noreferrer">here</a> and <a href="" target="_blank" rel="noopener noreferrer">here</a>.</li>
                                <li className="token-li">Application with the UI: <a href="" target="_blank" rel="noopener noreferrer"></a></li>
                                <li className="token-li">JS SDK: <a href="" target="_blank" rel="noopener noreferrer"></a> (<a href="" target="_blank" rel="noopener noreferrer">source</a>)</li>
                                <li className="token-li">Rust SDK: <a href="" target="_blank" rel="noopener noreferrer"></a> (<a href="" target="_blank" rel="noopener noreferrer">source</a>)</li>
                                <li className="token-li">Program code: <a href="" target="_blank" rel="noopener noreferrer"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

