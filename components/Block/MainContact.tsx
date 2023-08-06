import { css } from '@emotion/react';
import { useState } from 'react';

import { MaxWidth, Wrap } from 'components/Base';
import { Input, Radio, Submit, Textarea } from 'components/Form';
import { MainTit } from 'components/Tit';

import config from 'config';

import { setPageLink } from 'feature';

import { mq } from 'styles/media';

interface Props {}

const MainContact = ({}: Props) => {
  const [send, setSend] = useState(false),
    [userKind, setUserKind] = useState(''),
    [userName, setUserName] = useState(''),
    [postalCode, setPostalCode] = useState(''),
    [userAddress, setUserAddress] = useState(''),
    [userEmail, setUserEmail] = useState(''),
    [userTel, setUserTel] = useState(''),
    [userCont, setUserCont] = useState('');

  const updateKind = (e: any) => setUserKind(e.target.value),
    updateUserName = (e: any) => setUserName(e.target.value),
    updatePostalCode = (e: any) => setPostalCode(e.target.value),
    updateUserAddress = (e: any) => setUserAddress(e.target.value),
    updateUserEmail = (e: any) => setUserEmail(e.target.value),
    updateUserTel = (e: any) => setUserTel(e.target.value),
    updateUserCont = (e: any) => setUserCont(e.target.value);

  const submit = async (e: any) => {
    e.preventDefault();

    const FORM_URL = `${config.WP_URL}contact-form-7/v1/contact-forms/8/feedback`;
    const formData = new FormData();

    formData.append('your-kind', userKind);
    formData.append('your-name', userName);
    formData.append('postal-code', postalCode);
    formData.append('your-address', userAddress);
    formData.append('your-email', userEmail);
    formData.append('your-tel', userTel);
    formData.append('your-cont', userCont);

    const response = await fetch(FORM_URL, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      alert('正しく送信できませんでした。もう一度お試し頂くか、電話にてお問い合わせください');
      return;
    }

    const responseData = await response.json().catch((e) => {
      return {};
    });

    if (responseData.status === 'mail_sent') {
      setSend(true);
    } else {
      alert('正しく送信できませんでした。もう一度お試し頂くか、電話にてお問い合わせください。');
    }
  };

  setPageLink('contact');

  return (
    <>
      <span id="contact" />
      <div css={component}>
        <MainTit tit="お問い合わせ" />
        <MaxWidth>
          <Wrap width="60">
            <p css={pCss}>ご購入・販売に関しましては、下記よりお気軽にお問い合わせください。</p>
            <div css={form}>
              <p className="head">お問い合わせメールフォーム</p>
              {!send ? (
                <form css={formCss} onSubmit={submit}>
                  <Radio
                    label="お問い合わせ種類"
                    name="kind"
                    onChange={updateKind}
                    radioItems={['弊社製品について', 'いちご狩りについて', 'その他のお問い合わせ']}
                    required={true}
                    value={userKind}
                  />
                  <Input
                    label="お名前"
                    name="name"
                    onChange={updateUserName}
                    required={true}
                    type="text"
                    value={userName}
                  />
                  <Input
                    label="郵便番号"
                    name="postal-code"
                    onChange={updatePostalCode}
                    postalCode={true}
                    required={false}
                    type="text"
                    value={postalCode}
                  />
                  <Input
                    label="ご住所"
                    name="address"
                    onChange={updateUserAddress}
                    required={true}
                    type="text"
                    value={userAddress}
                  />
                  <Input
                    label="メールアドレス"
                    name="email"
                    onChange={updateUserEmail}
                    required={true}
                    type="email"
                    value={userEmail}
                  />
                  <Input
                    label="電話番号"
                    name="tel"
                    onChange={updateUserTel}
                    required={true}
                    type="tel"
                    value={userTel}
                  />
                  <Textarea
                    label="お問い合わせ内容"
                    name="cont"
                    onChange={updateUserCont}
                    required={true}
                    value={userCont}
                  />
                  <Submit />
                </form>
              ) : (
                <p className="completion">送信完了しました。ありがとうございました。</p>
              )}
            </div>
          </Wrap>
        </MaxWidth>
      </div>
    </>
  );
};

const component = css`
  background-color: var(--color-2);
  padding: 6.5rem 0 1.8rem;
  position: relative;

  ${mq.m} {
    padding: 5.9rem 0 1.7rem;
  }

  ${mq.xs} {
    padding: 5.3rem 0 1.6rem;
  }
`;

const form = css`
  background-color: var(--white);
  border-radius: 20px;
  padding: 2.2rem 4.5rem 2.5rem;

  & > p {
    color: var(--color-1);
    font-family: var(--noto-sans-jp);
    text-align: center;

    &.completion {
      color: var(--color-3);
      font-size: 1rem;
      font-weight: 400;
    }

    &.head {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 2.6rem;
    }
  }

  ${mq.m} {
    border-radius: 15px;
    padding: 2rem 3rem 2.3rem;
  }

  ${mq.xs} {
    border-radius: 10px;
    padding: 1.8rem 1.5rem 2.1rem;
  }
`;

const formCss = css`
  & > div:nth-child(n + 2) {
    margin-top: 1.5rem;
  }

  ${mq.m} {
    & > div:nth-child(n + 2) {
      margin-top: 1.4rem;
    }
  }

  ${mq.xs} {
    & > div:nth-child(n + 2) {
      margin-top: 1.3rem;
    }
  }
`;

const pCss = css`
  color: var(--color-1);
  font-family: var(--noto-sans-jp);
  font-size: 1.1rem;
  font-weight: 700;
  margin: 4rem 0 5.8rem;
  text-align: center;

  ${mq.m} {
    margin: 3.6rem 0 5.3rem;
  }

  ${mq.xs} {
    margin: 3.2rem 0 4.8rem;
  }
`;

export default MainContact;
