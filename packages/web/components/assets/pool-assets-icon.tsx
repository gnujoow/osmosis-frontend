import Image from "next/image";
import { ObservablePool } from "@osmosis-labs/stores";
import { FunctionComponent } from "react";
import classNames from "classnames";

interface Props {
  assets: Array<ObservablePool["poolAssets"][0]>;
  size: "sm" | "md";
}

export const PoolAssetsIcon: FunctionComponent<Props> = ({
  assets,
  size = "md",
}) => {
  return (
    <div className="relative flex items-center">
      <div
        className={classNames(
          {
            "w-[4.125rem] h-[4.125rem]": size === "md",
            "w-[2.125rem] h-[2.125rem]": size === "sm",
          },
          "absolute z-10 w-[4.125rem] h-[4.125rem] rounded-full border bg-card border-enabledGold flex items-center justify-center"
        )}
      >
        {assets[0].amount.currency.coinImageUrl ? (
          <Image
            src={assets[0].amount.currency.coinImageUrl}
            alt={assets[0].amount.currency.coinDenom}
            width={size === "md" ? 54 : 28}
            height={size === "md" ? 54 : 28}
          />
        ) : (
          <Image
            src="/icons/question-mark.svg"
            alt="no token icon"
            width={size === "md" ? 54 : 28}
            height={size === "md" ? 54 : 28}
          />
        )}
      </div>
      <div
        className={classNames(
          {
            "w-[4.125rem] h-[4.125rem] ml-10": size === "md",
            "w-[2.125rem] h-[2.125rem] ml-5": size === "sm",
          },
          "rounded-full border border-enabledGold shrink-0 flex items-center justify-center"
        )}
      >
        {assets.length >= 3 ? (
          <div className="body1 text-white-mid ml-2.5">{`+${
            assets.length - 1
          }`}</div>
        ) : assets[1].amount.currency.coinImageUrl ? (
          <Image
            src={assets[1].amount.currency.coinImageUrl}
            alt={assets[1].amount.currency.coinDenom}
            width={size === "md" ? 54 : 28}
            height={size === "md" ? 54 : 28}
          />
        ) : (
          <Image
            src="/icons/question-mark.svg"
            alt="no token icon"
            width={size === "md" ? 54 : 28}
            height={size === "md" ? 54 : 28}
          />
        )}
      </div>
    </div>
  );
};
