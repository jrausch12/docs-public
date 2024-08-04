import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
	site: "https://docs.dusk.network",
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathjax],
	},
	redirects: {
		'/itn/fast-sync': '/nocturne/fast-sync',
		'/itn/node-running-guide': '/nocturne/node-running-guide',
		'/itn/testnet-faucet': '/nocturne/testnet-faucet',
		'/itn/upgrade-node': '/nocturne/upgrade-node',
	},
	integrations: [
		starlight({
			title: "DOCUMENTATION",
			favicon: "./src/assets/favicon.svg",
			logo: {
				light: "./src/assets/logo-light.svg",
				dark: "./src/assets/logo-dark.svg",
			},
			components: {
				PageFrame: "./src/components/PageFrame.astro",
				Header: "./src/components/Header.astro",
				ContentPanel: "./src/components/ContentPanel.astro",
				Sidebar: './src/overrides/Sidebar.astro',
				SiteTitle: './src/overrides/SiteTitle.astro',
			},
			social: {
				github: "https://github.com/dusk-network",
				"x.com": "https://x.com/duskfoundation",
				discord: "https://discord.com/invite/dusk-official",
				linkedin: "https://www.linkedin.com/company/dusknetwork/",
				telegram: "https://t.me/DuskNetwork",
				youtube: "https://www.youtube.com/c/DuskNetwork",
				reddit: "https://www.reddit.com/r/dusknetwork",
			},
			customCss: ["./src/fonts/font-face.css", "./src/styles/custom.css"],
			pagination: false,
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
			sidebar: [
				{ label: 'Welcome', link: 'welcome' },
				{
					label: 'Learn Dusk',
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Dusk Protocol',
							items: [
								{ label: "Overview", link: 'learn/dusk-protocol/overview' },
								{ label: 'Core Values', link: 'learn/dusk-protocol/core-values' },
								{
									label: 'Transaction Models',
									items: [
										{ label: "Overview", link: 'learn/dusk-protocol/transaction_models/overview' },
										{ label: "Phoenix", link: 'learn/dusk-protocol/transaction_models/phoenix' },
										{ label: "Moonlight", link: 'learn/dusk-protocol/transaction_models/moonlight' },
										{ label: "Zedger", link: 'learn/dusk-protocol/transaction_models/zedger' },
									],
									collapsed: true,
								},
								{ label: "Resources", link: 'learn/dusk-protocol/additional-resources' },
							],
						},
						{
							label: 'Economic Information',
							items: [
								{ label: "Tokenomics", link: 'learn/economic-information/tokenomics' },
								{ label: "Gas Management", link: 'learn/economic-information/gas-management' },
								{ label: "Economic Protocol", link: 'learn/economic-information/economic-protocol' },
								{ label: "Succinct Attestation Consensus", link: 'learn/economic-information/succinct-attestation' },
							],
							collapsed: true,
						},
						{
							label: 'Digital Assets',
							items: [
								{ label: "MiCA", link: 'learn/digital-assets/mica' },
								{ label: "Security Lifecycle", link: 'learn/digital-assets/lifecycle' },
								{ label: "Security Dematerialization", link: 'learn/digital-assets/dematerialization' },
							],
							collapsed: true,
						},
						{
							label: 'Cryptography',
							items: [
								{ label: "Introduction", link: 'learn/zero-knowledge/introduction' },
								{ label: "IOP and PCS", link: 'learn/zero-knowledge/iop_pcs' },
								{ label: "PLONK", link: 'learn/zero-knowledge/plonk' },
								{ label: "KZG", link: 'learn/zero-knowledge/kzg' },
								{ label: "BLS12-381", link: 'learn/zero-knowledge/bls' },
							],
							collapsed: true,
						}
					],
				},
				{
					label: "Getting Started",
					items: [
						{
							label: "Node Setup",
							items: [
								{ label: "Overview", link: '/getting-started/node-setup/overview' },
								{ label: "Node Requirements", link: '/getting-started/node-setup/node-requirements' },
								{ label: "Build from Source", link: '/getting-started/node-setup/build-from-source' },
								{ label: "Docker Image", link: '/getting-started/node-setup/docker-image' },
								{ label: "Manual Resync", link: '/getting-started/node-setup/manual-resync' },
								{ label: "Slashing", link: '/getting-started/node-setup/slashing' },
							],
							collapsed: true,
						},
						{
							label: "Smart Contracts",
							items: [
								{ label: "Introduction", link: '/getting-started/vm/introduction-sc' },
								{
									label: "Components",
									items: [
										{ label: "Piecrust", link: '/getting-started/vm/02-components/01-piecrust' },
										{ label: "Rusk", link: '/getting-started/vm/02-components/02-rusk' },
										{ label: "Rues", link: '/getting-started/vm/02-components/03-rues' },
									],
									collapsed: true,
								},
								{
									label: "Smart Contracts on Dusk",
									items: [
										{ label: "Overview", link: '/getting-started/vm/01-sc-on-dusk/01-smart_contracts_on_dusk' },
										{ label: "Transactions", link: '/getting-started/vm/01-sc-on-dusk/02-transactions' },
										{ label: "Keys", link: '/getting-started/vm/01-sc-on-dusk/03-keys' },
										{ label: "Functions", link: '/getting-started/vm/01-sc-on-dusk/04-functions' },
										{ label: "Token Standards", link: '/getting-started/vm/01-sc-on-dusk/05-token_standards' },
										{ label: "Circuits", link: '/getting-started/vm/01-sc-on-dusk/06-circuits' },
										{ label: "Sessions", link: '/getting-started/vm/01-sc-on-dusk/07-sessions' },
										{ label: "Hashing", link: '/getting-started/vm/01-sc-on-dusk/08-hashing' },
										{ label: "Semantics", link: '/getting-started/vm/01-sc-on-dusk/09-semantics' },
										{ label: "Serialization", link: '/getting-started/vm/01-sc-on-dusk/10-serialization' },
									],
									collapsed: true,
								},
								{
									label: "Getting Started",
									items: [
										{ label: "Dependencies", link: '/getting-started/vm/04-getting-started/01-dependencies' },
										{ label: "IDE", link: '/getting-started/vm/04-getting-started/02-ide' },
									],
									collapsed: true,
								},
								{
									label: "Guides",
									items: [
										{ label: "Debugging", link: '/getting-started/vm/05-guides/01-debugging' },
										{ label: "Testing", link: '/getting-started/vm/05-guides/02-testing' },
										{ label: "Compiling", link: '/getting-started/vm/05-guides/03-compiling' },
										{ label: "Deploying", link: '/getting-started/vm/05-guides/04-deploying' },
										{ label: "Upgrades", link: '/getting-started/vm/05-guides/05-upgrades' },
										{ label: "Interacting", link: '/getting-started/vm/05-guides/06-interacting' }
									],
									collapsed: true,
								},
								{
									label: "Examples",
									items: [
										{ label: "Examples Overview", link: '/getting-started/vm/03-examples/examples' },
										{ label: "Counter Example", link: '/getting-started/vm/03-examples/01-counter-example' },
										{ label: "Comparison with VM1", link: '/getting-started/vm/03-examples/02-comparison-with-vm1' },
										{ label: "Token Example", link: '/getting-started/vm/03-examples/03-token-example' },
										{ label: "Multisig", link: '/getting-started/vm/03-examples/04-multisig' },
										{ label: "Sessions Example", link: '/getting-started/vm/03-examples/05-sessions-example' },
										{ label: "Contract Calls", link: '/getting-started/vm/03-examples/06-contracts-calls' },
										{ label: "Host Calls", link: '/getting-started/vm/03-examples/07-host-calls' },
										{ label: "Persistence", link: '/getting-started/vm/03-examples/08-persistance' },
										{ label: "Metadata", link: '/getting-started/vm/03-examples/09-sc-metadata' },
										{ label: "Gas Usage", link: '/getting-started/vm/03-examples/10-spender' }
									],
									collapsed: true,
								},
								{
									label: "FAQs and issues",
									items: [
										{ label: "FAQs", link: '/getting-started/vm/06-faqs-issues/01-faqs' },
										{ label: "Troubleshooting", link: '/getting-started/vm/06-faqs-issues/02-troubleshooting' },

									],
									collapsed: true,
								},

							],
							collapsed: true,
						},
						{
							label: "Wallets",
							items: [
								{ label: "The Wallet Stack", link: '/getting-started/wallet/wallet-stack' },
								{ label: "Wallet Core Library", link: '/getting-started/wallet/wallet-core' },
								//{ label: "Wallet JS Library", link: '/getting-started/wallet/wallet-js' },
							],
							collapsed: true,
						},
						{
							label: "Digital Identity",
							items: [
								{ label: "Citadel Protocol", link: '/getting-started/digital-identity/protocol' },
								{ label: "Citadel SDK", link: '/getting-started/digital-identity/sdk' },
							],
							collapsed: true,
						},
					],
				},
				{
					label: "Nocturne",
					items: [
						{ label: "Node Running", link: "/nocturne/node-running-guide/" },
						{ label: "Faucet", link: "/nocturne/testnet-faucet/" },
						{ label: "Node upgrading", link: "/nocturne/upgrade-node/" },
						{ label: "Fast syncing", link: "/nocturne/fast-sync/" },
					],
					collapsed: true,
				},
				{
					label: "Pre-Mainnet",
					items: [
						{ label: "Dusk-ERC20 Staking", link: "/pre-mainnet/erc20-staking/" },
						{ label: "BEP2 migration", link: "/pre-mainnet/bep2-migration/" },
					],
				},
				{
					label: "Community and Ecosystem",
					items: [
						{ label: "Community", link: "community/overview" },
						{ label: "Block Explorer", link: "community/block-explorer" },
						{ label: "DIPs", link: 'community/dips' },
					],
				},
			],
		}),
	],
});
