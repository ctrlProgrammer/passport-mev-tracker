import MeterLogo from "../../assets/images/Meter.svg";
import BinanceLogo from "../../assets/images/Binance.svg";
import VoltswapLogo from "../../assets/images/Voltswap.png";
import PancakeSwapLogo from "../../assets/images/Pancake.svg";

export class UtilsHelpers {
  static toHexadecimal(number: string) {
    if (!isNaN(Number(number))) return parseInt(number, 16).toString();
    else console.log("[UTILS] To Hexadecimal error.");
  }

  static normalizeWei(wei: string) {
    return !isNaN(Number(wei)) ? Number(wei) / Math.pow(10, 18) : NaN;
  }

  static getBlockChainIcon(id: string) {
    switch (id) {
      case "82":
        return MeterLogo;
      case "56":
        return BinanceLogo;
    }
  }

  static strtodec(amount: string, dec: number) {
    let stringf = "";
    for (var i = 0; i < dec; i++) stringf = stringf + "0";
    return amount + stringf;
  }

  static getDecimalsUnit(decimals: number) {
    switch (decimals) {
      case 0:
        return "ether";
      case 9:
        return "gwei";
      case 18:
        return "wei";
    }
  }

  static getBlockchainName(id: string) {
    switch (id) {
      case "82":
        return "meter";
      case "56":
        return "binance";
      case "137":
        return "polygon";
    }
  }

  static getDEXLogo(id: string) {
    switch (id) {
      case "voltswap":
        return VoltswapLogo;
      case "pancake":
        return PancakeSwapLogo;
    }
  }

  static parseSeconds(timeInSeconds: number) {
    const minutes = timeInSeconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;

    return timeInSeconds < 60
      ? timeInSeconds.toFixed() + " Seconds"
      : minutes < 60
      ? minutes.toFixed() + " Minutes"
      : hours < 48
      ? hours.toFixed() + " Hours"
      : days.toFixed() + " Days";
  }

  static timestampToHours(miliseconds: number) {
    return (miliseconds / 1000 / 60 / 60).toFixed(1);
  }

  static parseMoney(money: number) {
    return Intl.NumberFormat().format(money);
  }

  static shuffle(array: any[]) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  static validateFiles(files: File[], validType: string[]) {
    let isValid = true;

    for (let i = 0; i < files.length; i++) {
      let validated = false;

      for (let j = 0; j < validType.length; j++) {
        if (files[i].type === validType[j]) {
          validated = true;
          break;
        }
      }

      if (validated === false) {
        isValid = false;
        break;
      }
    }

    return isValid;
  }

  static validateFilesSize(files: File[], maxSize: number) {
    let isValid = true;

    for (let i = 0; i < files.length; i++) {
      if (files[i].size > maxSize) {
        isValid = false;
        break;
      }
    }

    return isValid;
  }

  static formatBigNumbers(n: number) {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  }

  static fixWithoutRounding(n: number, d: number) {
    return (Math.floor(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d);
  }
}
