# Sui 中文文档

## 概述

本仓库包含构建和更新 [Sui 文档](https://docs.sui.io) 所需的资源，分为 `content` 和 `site` 两部分。要在本地运行 docs.sui.io 站点，请在终端或控制台中打开 site 目录。使用包管理器安装所需的模块：

```shell
pnpm install
```

在同一目录中，本地构建站点：

```shell
pnpm build
```

这在首次克隆仓库时是必需的，因为它将[下载OpenRPC规范]((/docs/site/src/utils/getopenrpcspecs.js))，这是部署站点所必需的。

接下来，使用以下命令将站点的开发预览部署到 `localhost:3000`：

```shell
pnpm start
```

> 如果在本地运行站点时出现错误，提示没有 `open-rpc` 规范，请先运行 `pnpm build`。它将准备文件并修复该问题。

网站部署后会监视 `content` 目录中文件的更新（以及站点源文件），并更新 UI 以匹配你所做的任何保存。

完成更改后，再次运行 `pnpm build`，这将构建静态站点并将文件放置在 `site\build` 中。在提交更改进行审查之前运行此命令很重要，因为构建将在诸如坏的内部链接之类的错误上失败，并将错误原因显示到控制台。开发预览会忽略此类错误，以提供更灵活的环境。

Sui Foundation 无法提供本地构建文档站点的支持。如果遇到问题，请查阅 [Docusaurus文档](https://docusaurus.io/)。

## 拉取请求

Sui使用Vercel来托管其文档站点。Vercel为每个提交到Sui仓库的拉取请求构建文档的预览。你可以在 Vercel 机器人的 PR 注释部分找到指向此预览的链接。点击 **Visit Preview** 链接以验证你的更改是否按你的期望进行。

如果你想在准备好进行审查之前查看Vercel预览，那么[请将你的 PR 标记为草稿](https://github.blog/2019-02-14-introducing-draft-pull-requests/)。

## 贡献

Sui是为社区而设。为了所有人的利益做出贡献。

- [文档贡献指南](https://docs.sui.io/references/contribute/contribution-process)
- [仓库贡献指南](https://docs.sui.io/contribute-to-sui-repos)
- [样式指南](https://docs.sui.io/style-guide)
- [本地化](https://docs.sui.io/localize-sui-docs)
- [行为准则](https://docs.sui.io/contribute/code-of-conduct)

## License

Sui文档在 [LICENSE](CC BY 4.0 license) 下分发。
