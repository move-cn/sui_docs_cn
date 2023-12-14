// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from "react";
import { useHistory } from "@docusaurus/router";

import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Home() {
  const history = useHistory();
  const SingleLink = (props) => {
    const { to } = props;

    return (
      <div
        onClick={() => history.push(to)}
        className="bg-sui-card-dark rounded-sui w-[350px] h-[350px] p-8 bg-[url(../static/img/index/card-bg.svg)] justify-center flex justify-center items-center"
      >
        <div className="p-4 rounded-full border border-solid border-sui-white/30 w-[249px] h-[51px] text-sui-white bg-sui-card-dark bg-[url(../static/img/index/circle-arrow.svg)] bg-no-repeat bg-[center_right_2px] flex items-center cursor-pointer hover:shadow-sui hover:shadow-sui-blue hover:bg-opacity-50 hover:bg-[url(../static/img/index/circle-arrow-blue.svg)]">
          创建你的第一个 dApp
        </div>
      </div>
    );
  };
  const ContentItem = (props) => {
    const [vis, setVis] = useState(false);
    const { children, title } = props;
    const handleClick = () => {
      setVis(!vis);
    };

    return (
      <div className="grid grid-cols-3 border-solid border-0 border-t border-sui-white/50 mb-8 lg:mx-0 mx-4">
        <p
          className={`lg:text-4xl text-2xl pb-2 mt-8 pr-12 cursor-pointer bg-no-repeat bg-right-top flex-none ${
            vis
              ? "bg-[url(../static/img/index/circle-arrow-up.svg)]"
              : "bg-[url(../static/img/index/circle-arrow-down.svg)]"
          }`}
          onClick={handleClick}
        >
          {title}
        </p>
        <p
          className={`${
            vis ? "opacity-100" : "opacity-0"
          } transition-opacity ease-in-out duration-300 col-span-2 mt-10 text-lg text-sui-blue-lighter mx-8`}
        >
          {vis && children}
        </p>
      </div>
    );
  };
  const HomeCard = (props) => {
    const { aux, title, children } = props;
    return (
      <div
        className={`p-px col-span-3 bg-gradient-to-b from-sui-white/40 from-20% hover:from-30% via-sui-white/0 to-sui-white/10 to-80% rounded-sui w-[350px] h-[350px]`}
      >
        <div
          className={`${
            aux ? "bg-sui-ghost-dark" : "bg-sui-card-dark"
          } rounded-sui w-full h-full p-8 max-w-[350px] max-h-[350px]`}
        >
          <p className="text-4xl text-white table-cell align-bottom pb-2 h-16 pb-8">
            {title}
          </p>
          {children}
        </div>
      </div>
    );
  };

  const cardlinks =
    "block py-3 border-0 border-t border-solid border-color-white text-sui-blue-lighter bg-[url(../static/img/index/right-arrow.svg)] bg-no-repeat bg-right hover:no-underline hover:text-sui-blue-lighter hover:bg-[url(../static/img/index/right-arrow-blue.svg)] pr-10";
  const darkcardclass =
    "p-px col-span-4 bg-gradient-to-b from-sui-white/40 from-20% hover:from-30% via-sui-white/0 to-sui-white/10 to-80% rounded-sui";
  return (
    <Layout>
      <div className="bg-sui-black overflow-hidden">
        <div className="w-full mt-24 mb-12 mx-auto bg-sui-black">
          <div className="text-center">
            <p className="lg:text-8xl md:text-6xl text-4xl text-white">
              Sui 中文文档
            </p>
            <p className="text-lg sm:text-xl lg:text-3xl mb-0 px-8 md:w-1/2 w-auto mx-auto text-sui-blue-lighter inline-block">
              通过示例、指南和概念探索 Sui 的能力
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-2 max-w-[1066px] mx-auto">
          <HomeCard title="关于 Sui">
            <Link
              className={`${cardlinks} text-2xl`}
              to="./concepts/tokenomics"
            >
              代币经济学
            </Link>
            <Link
              className={`${cardlinks} text-2xl`}
              to="./concepts/cryptography"
            >
              密码学
            </Link>
            <Link className={`${cardlinks} text-2xl`} to="standards">
              标准
            </Link>
          </HomeCard>
          <HomeCard title="开发者">
            <Link
              className={`${cardlinks} text-2xl`}
              to="./guides/developer/getting-started"
            >
              入门
            </Link>
            <Link
              className={`${cardlinks} text-2xl`}
              to="./guides/developer/sui-101"
            >
              Sui 开发者基础知识
            </Link>
            <Link
              className={`${cardlinks} text-2xl`}
              to="./concepts/sui-move-concepts"
            >
              Move
            </Link>
          </HomeCard>
          <HomeCard title="验证者和节点运营商">
            <Link
              className={`${cardlinks} text-2xl`}
              to="./guides/operator/validator-config"
            >
              验证器配置
            </Link>
            <Link
              className={`${cardlinks} text-2xl`}
              to="./guides/operator/sui-full-node"
            >
              运行一个 Sui 全节点
              <span className="block bg-auto bg-[url(../static/img/index/right-arrow.svg)]"></span>
            </Link>
          </HomeCard>
          <HomeCard title="参考" aux>
            <Link
              className={`${cardlinks} text-md`}
              to="https://sdk.mystenlabs.com/dapp-kit?ref=blog.sui.io"
            >
              Sui dApp 套件
            </Link>
            <Link className={`${cardlinks} text-md`} to="/references/sui-api">
              Sui API
            </Link>
            <Link
              className={`${cardlinks} text-md`}
              to="https://github.com/MystenLabs/sui/tree/main/crates/sui-framework/docs"
            >
              Sui 的框架 (GitHub)
            </Link>
            <Link
              className={`${cardlinks} text-md`}
              to="https://github.com/MystenLabs/sui/tree/main/crates/sui-sdk"
            >
              Rust SDK (GitHub)
            </Link>
          </HomeCard>
          <HomeCard title="资源" aux>
            <Link
              className={`${cardlinks} text-md`}
              to="https://sui.directory/?_project_type=api%2Cdeveloper-tools%2Cinfrastructure%2Csdk"
            >
              Sui 生态圈
            </Link>
            <Link className={`${cardlinks} text-md`} to="https://blog.sui.io/">
              Sui 博客
            </Link>
            <Link
              className={`${cardlinks} text-md`}
              to="guides/developer/dev-cheat-sheet"
            >
              Sui 开发备忘录
            </Link>
          </HomeCard>
          <div className={`${darkcardclass} w-[350px] h-[350px]`}>
            <SingleLink to="/guides/developer/first-app"></SingleLink>
          </div>
        </div>

        <div className="lg:w-[1066px] w-auto my-8 md:mt-24 text-white mx-auto text-center">
          <h1 className="mb-4 lg:text-8xl md:text-6xl text-4xl font-normal">
            为何是 Sui?
          </h1>
          <p className="text-lg sm:text-xl lg:text-3xl mb-0 px-8 md:w-1/2 w-auto mx-auto text-sui-blue-lighter inline-block">
            Sui是第一个互联网规模的可编程区块链平台
          </p>
        </div>
        <div className="lg:w-[1066px] width-auto mx-auto flex-none md:flex md:flex-row items-center">
          <div className="text-center mx-auto mb-8 md:mb-0">
            <img
              className="lg:w-[350px] w-[250px]"
              src="/img/index/blocks.png"
              alt="Decorative visual"
            />
          </div>
          <div className="lg:w-[676px] mx-8 md:ml-8 md:mr-0 lg:block sm:block md:hidden">
            <p className="text-xl text-sui-blue-lighter border-solid border-0 border-t border-sui-white/50">
              <span className="inline-block mt-7 mb-3 ml-4">
                无与伦比的可扩展性，即时结算
              </span>
            </p>
            <p className="text-xl text-sui-blue-lighter border-solid border-0 border-t border-sui-white/50">
              <span className="inline-block mt-7 mb-3 ml-4">
                主流开发者可以使用的安全智能合约语言
              </span>
            </p>
            <p className="text-xl text-sui-blue-lighter border-solid border-0 border-t border-sui-white/50">
              <span className="inline-block mt-7 mb-3 ml-4">
                能够定义丰富且可组合的链上资产
              </span>
            </p>
            <p className="text-xl text-sui-blue-lighter border-solid border-0 border-t border-sui-white/50">
              <span className="inline-block mt-7 mb-3 ml-4">
                为 Web3 应用程序带来更好的用户体验
              </span>
            </p>
          </div>
        </div>
        <div className="sm:w-[840] lg:w-[1066px] w-auto my-12 text-white mx-auto md:block hidden">
          <ContentItem title="可扩展性">
          Sui可以水平扩展以满足应用程序的需求。
          通过增加工作人员，网络容量与 Sui 验证器处理能力的增加成正比，从而即使在网络流量较高的情况下，gas 费用也较低。
          这种可扩展性特征与其他具有刚性瓶颈的区块链形成鲜明对比。
          </ContentItem>
          <ContentItem title="Move">
            Move 设计防止了诸如可重入攻击、毒令牌和仿冒令牌批准等问题，这些是攻击者在其他平台上利用的手段，用以窃取数百万资产。
            对安全性和表现力的强调使开发人员更容易从 Web2.0 过渡到 Web3 ，无需理解基础基础设施的复杂性。
          </ContentItem>
          <ContentItem title="链上资产">
            丰富的链上资产使得基于效用的新应用和经济体能够脱离对人为稀缺性的过度依赖。
            开发人员可以实现动态NFT，可以在应用程序特定的方式中升级、打包和分组，例如根据游戏玩法的变化进行头像和可定制物品的更改。
            这种能力使 NFT 的行为完全反映在链上，从而增强了游戏内经济，使 NFT 更有价值，提供更引人入胜的反馈循环。
          </ContentItem>
          <ContentItem title="专为 Web3 打造">
            Sui的目标是成为最易访问的智能合约平台，赋予开发人员在 Web3 中创建出色用户体验的能力。
            为了引领下一个十亿用户，Sui为开发人员提供各种工具，以充分利用Sui区块链的威力。
            Sui开发工具包 (SDK) 将使开发人员能够无拘无束地构建。
          </ContentItem>
        </div>
      </div>
    </Layout>
  );
}
