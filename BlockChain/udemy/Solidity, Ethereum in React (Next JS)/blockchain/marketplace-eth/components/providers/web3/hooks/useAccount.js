import { useEffect } from "react";
import useSWR from "swr";

// 관리자 계정
const adminAddresses = {
  "0xd424cde36498e09b1353d92b603b6540b0f02e4bce0f839a6030a8ac64a0ab84": true, // hash
};

// 계정 가져오기
export const handler = (web3, provider) => () => {
  const { data, mutate, ...rest } = useSWR(
    () => (web3 ? "web3/accounts" : null),
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
  );

  // 계정 가져오면 버튼 UI 바로 바꾸기
  useEffect(() => {
    provider &&
      provider.on("accountsChanged", (accounts) => mutate(accounts[0] ?? null));
  }, [provider]);

  return {
    data,
    isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
    mutate,
    ...rest,
  };
};
