import { ethers } from "ethers";

export default function handler(req, res) {
  try {
    const CONTRACT = process.env.CONTRACT_ADDRESS || "0xYourContractHere";
    const feeWei = ethers.parseEther("0.0001").toString();

    const iface = new ethers.Interface(["function claimFree() payable"]);
    const data = iface.encodeFunctionData("claimFree", []);

    res.status(200).json({
      chainId: "eip155:8453",
      method: "eth_sendTransaction",
      params: {
        to: CONTRACT,
        data: data,
        value: ethers.toBeHex(BigInt(feeWei))
      }
    });
  } catch (e) {
    res.status(500).json({ error: "Server error" });
  }
}
