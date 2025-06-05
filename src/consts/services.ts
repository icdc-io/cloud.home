import OutrunContainerService from "../images/Outrun Container Service.svg";
import OutrunDedicated from "../images/Outrun Dedicated.svg";
import OutrunCloud from "../images/Outrun cloud.svg";
import Accounts from "../images/accounts.svg";
import Admin from "../images/admin.svg";
import Artifactory from "../images/artifactory.svg";
import Billing from "../images/billing.svg";
import Code from "../images/code.svg";
import Compliance from "../images/compliance.svg";
import Compute from "../images/compute.svg";
import database from "../images/database.svg";
import Devops from "../images/devops.svg";
import Disk from "../images/disk.svg";
import Manager from "../images/manager.svg";
import Migrator from "../images/migrator.svg";
import mq from "../images/mq.svg";
import Networking from "../images/networking.svg";
import Openshift from "../images/openshift.svg";
import Storage from "../images/storage.svg";
import Support from "../images/support.svg";
import telemetry from "../images/telemetry.svg";

type Route = {
	ru: string;
	en: string;
	route: string;
};

type Service = {
	title: string;
	description: {
		ru: string;
		en: string;
	};
	img: string;
	url?: {
		[key: string]: string;
	};
	routes: (location: string) => Record<string, Route[]>;
};

type Services = Record<string, Service>;

const services: Services = {
	compute: {
		title: "Compute",
		description: {
			en: "Order cloud services directly from the catalog: virtual machines, application images, and network access.",
			ru: "Позволяет разработчикам быстро и самостоятельно заказывать облачные сервисы из каталога: виртуальные машины,\
                образы приложений и сетевой доступ.",
		},
		img: Compute,
		url: {
			xby: "https://compute.xby.icdc.io/ui/service/",
			zby: "https://compute.zby.icdc.io/ui/service/",
			idc: "https://compute.icdc.io/ui/service/",
		},
		routes: () => ({
			member: [
				// { ru: 'Каталог', en: 'Catalog', route: '/ui/service/catalogs' },
				// { ru: 'Отчеты', en: 'Reports', route: '/ui/service/reports' },
				// { ru: 'Ресурсы', en: 'Resources', route: '/ui/service/resources' }
			],
			admin: [
				// { ru: 'Отчеты', en: 'Reports', route: '/ui/service/reports' },
				// { ru: 'Ресурсы', en: 'Resources', route: '/ui/service/resources' },
				// { ru: 'Проекты', en: 'Projects', route: '/ui/service/projects' },
				// { ru: 'Пользователи', en: 'Users', route: '/ui/service/users' }
			],
			billing: [
				// { ru: 'Отчеты', en: 'Reports', route: '/ui/service/reports' },
				// { ru: 'Ресурсы', en: 'Resources', route: '/ui/service/resources' },
				// { ru: 'Проекты', en: 'Projects', route: '/ui/service/projects' },
				// { ru: 'Пользователи', en: 'Users', route: '/ui/service/users' }
			],
		}),
	},
	networking: {
		title: "Networking",
		description: {
			en: "An isolated part of the Cloud that provides a cloud network for resource management in a protected environment.",
			ru: "Виртуальный облачный сервис, который предоставляет изолированную облачную сеть для управления ресурсами в безопасной среде.",
		},
		img: Networking,
		url: {
			xby: "https://cloud.icdc.io/storage/",
			zby: "https://cloud.icdc.io/storage/",
			idc: "https://cloud.icdc.io/storage/",
		},
		routes: () => ({
			member: [
				// { ru: 'VPC', en: 'VPC', route: '/networks' },
				// { ru: 'Firewall', en: 'Firewall', route: '/groups' },
				// { ru: 'Шлюзы', en: 'Routes', route: '/routes' }
			],
			admin: [
				// { ru: 'VPC', en: 'VPC', route: '/networks' },
				// { ru: 'Firewall', en: 'Firewall', route: '/groups' },
				// { ru: 'Шлюзы', en: 'Routes', route: '/routes' }
			],
			billing: [
				// { ru: 'VPC', en: 'VPC', route: '/networks' },
				// { ru: 'Firewall', en: 'Firewall', route: '/groups' },
				// { ru: 'Шлюзы', en: 'Routes', route: '/routes' }
			],
		}),
	},
	storage: {
		title: "Storage",
		description: {
			en: "A reliable distributed storage system with the object, file system, and block device interfaces.",
			ru: "Надежное распределенное хранилище данных с различными интерфейсами доступа.",
		},
		img: Storage,
		url: {
			xby: "https://cloud.icdc.io/storage/",
			zby: "https://cloud.icdc.io/storage/",
			idc: "https://cloud.icdc.io/storage/",
		},
		routes: () => ({
			member: [
				// { ru: 'iSCSI', en: 'iSCSI', route: '/iscsi' }
			],
			admin: [
				// { ru: 'iSCSI', en: 'iSCSI', route: '/iscsi' }
			],
			billing: [
				// { ru: 'iSCSI', en: 'iSCSI', route: '/iscsi' }
			],
		}),
	},
	code: {
		title: "Code",
		description: {
			en: "Collaborate with team members. Build, deploy, and run your applications faster.",
			ru: "Помощь разработчикам в создании, развертывании и запуске ваших приложений.",
		},
		img: Code,
		url: {
			xby: "https://cloud.icdc.io/storage/",
			zby: "https://cloud.icdc.io/storage/",
			idc: "https://cloud.icdc.io/storage/",
		},
		routes: () => ({
			member: [
				{
					ru: "Запросы на слияние",
					en: "Merge Requests",
					route: "/dashboard/merge_requests",
				},
				{ ru: "Обсуждения", en: "Issues", route: "/dashboard/issues" },
			],
			admin: [
				{
					ru: "Запросы на слияние",
					en: "Merge Requests",
					route: "/dashboard/merge_requests",
				},
				{ ru: "Обсуждения", en: "Issues", route: "/dashboard/issues" },
			],
			billing: [
				{
					ru: "Запросы на слияние",
					en: "Merge Requests",
					route: "/dashboard/merge_requests",
				},
				{ ru: "Обсуждения", en: "Issues", route: "/dashboard/issues" },
			],
		}),
	},
	disk: {
		title: "Disk",
		description: {
			en: "Easy file storage and sharing for your team.",
			ru: "Максимально удобное хранение и обмен файлами для вашей команды.",
		},
		img: Disk,
		url: {
			xby: "https://disk.icdc.io/",
			zby: "https://disk.icdc.io/",
			idc: "https://disk.icdc.io/",
		},
		routes: () => ({
			member: [
				{ ru: "Файлы", en: "Files", route: "/apps/files/" },
				{ ru: "Календарь", en: "Calendar", route: "/apps/calendar/" },
				{ ru: "Настройки", en: "Settings", route: "/settings/user" },
			],
			admin: [
				{ ru: "Файлы", en: "Files", route: "/apps/files/" },
				{ ru: "Календарь", en: "Calendar", route: "/apps/calendar/" },
				{ ru: "Настройки", en: "Settings", route: "/settings/user" },
			],
			billing: [
				{ ru: "Файлы", en: "Files", route: "/apps/files/" },
				{ ru: "Календарь", en: "Calendar", route: "/apps/calendar/" },
				{ ru: "Настройки", en: "Settings", route: "/settings/user" },
			],
		}),
	},
	// openshift: {
	//     title: 'Openshift',
	//     description: {
	//         en: 'Focus on writing code and let OpenShift build, run, and scale your applications in the cloud.',
	//         ru: 'Фокусируйтесь на написании кода и позвольте OpenShift создавать, запускать и масштабировать Ваши приложения в облаке.'
	//     },
	//     img: Openshift,
	//     url: {
	//         xby: 'https://disk.icdc.io/',
	//         zby: 'https://disk.icdc.io/',
	//         idc: 'https://disk.icdc.io/'
	//     },
	//     routes: {
	//         member: [
	//             // { ru: 'Каталог', en: 'Catalog', route: '/catalogs' }
	//         ],
	//         admin: [
	//             // { ru: 'Каталог', en: 'Catalog', route: '/catalogs' }
	//         ],
	//         billing: [
	//             // { ru: 'Каталог', en: 'Catalog', route: '/catalogs' }
	//         ]
	//     }
	// },
	// devops: {
	//     title: 'DevOps',
	//     description: {
	//         en: 'Build and customize your own DevOps architecture.',
	//         ru: 'Легко заказывайте и управляйте собственной DevOps архитектурой.'
	//     },
	//     img: Devops,
	//     url: {
	//         xby: 'https://disk.icdc.io/',
	//         zby: 'https://disk.icdc.io/',
	//         idc: 'https://disk.icdc.io/'
	//     },
	//     routes: {
	//         member: [
	//             // { ru: 'Каталог', en: 'Catalog', route: '/catalogs' }
	//         ],
	//         admin: [
	//             // { ru: 'Каталог', en: 'Catalog', route: '/catalogs' }
	//         ],
	//         billing: [
	//             // { ru: 'Каталог', en: 'Catalog', route: '/catalogs' }
	//         ]
	//     }
	// },
	compliance: {
		title: "Compliance",
		description: {
			en: "Audit and security monitoring of physical and virtual servers.",
			ru: "Аудит и мониторинг безопасности физических и виртуальных серверов.",
		},
		img: Compliance,
		url: {
			xby: "https://compliance.icdc.io/",
			zby: "https://compliance.icdc.io/",
			idc: "https://compliance.icdc.io/",
		},
		routes: () => ({
			member: [
				{ ru: "Расписание", en: "Schedule", route: "/schedules" },
				{ ru: "Добавить сервер", en: "Add server", route: "/addserver" },
			],
			admin: [
				{ ru: "Расписание", en: "Schedule", route: "/schedules" },
				{ ru: "Добавить сервер", en: "Add server", route: "/addserver" },
			],
			billing: [
				{ ru: "Расписание", en: "Schedule", route: "/schedules" },
				{ ru: "Добавить сервер", en: "Add server", route: "/addserver" },
			],
		}),
	},
	artifactory: {
		title: "Artifactory",
		description: {
			en: "Convenient repository manager for storing various formats of artifacts.",
			ru: "Удобный менеджер репозиториев для хранения артефактов разных форматов.",
		},
		img: Artifactory,
		url: {
			xby: "https://artifactory.icdc.io/",
			zby: "https://artifactory.icdc.io/",
			idc: "https://artifactory.icdc.io/",
		},
		routes: () => ({
			member: [
				// { ru: 'Каталог', en: 'Catalog', route: '/#browse/browse' }
			],
			admin: [
				// { ru: 'Каталог', en: 'Catalog', route: '/#browse/browse' }
			],
			billing: [
				// { ru: 'Каталог', en: 'Catalog', route: '/#browse/browse' }
			],
		}),
	},
	migrator: {
		title: "Migrator",
		description: {
			en: "A simple and secure solution for migrating resources from AWS to ICDC without installing agents.",
			ru: "Простое и безопасное решение для миграции ресурсов из AWS в ICDC без установки агентов.",
		},
		img: Migrator,
		url: {
			xby: "https://migrator.icdc.io/",
			zby: "https://migrator.icdc.io/",
			idc: "https://migrator.icdc.io/",
		},
		routes: () => ({
			member: [
				// { title: 'Каталог', route: '/catalog' }, { title: 'Ресурсы', route: '/resources' }
			],
			admin: [
				// { title: 'Каталог', route: '/catalog' }, { title: 'Ресурсы', route: '/resources' }
			],
			billing: [
				// { title: 'Каталог', route: '/catalog' }, { title: 'Ресурсы', route: '/resources' }
			],
		}),
	},
	admin: {
		title: "Admin",
		description: {
			en: "Securely create and manage accounts, services, clusters, and locations.",
			ru: "Безопасно создавайте и управляйте аккаунтами, сервисами, кластерами и локациями.",
		},
		img: Admin,
		url: {
			xby: "https://migrator.icdc.io/",
			zby: "https://migrator.icdc.io/",
			idc: "https://migrator.icdc.io/",
		},
		routes: () => ({
			member: [
				// { ru: 'Аккаунты', en: 'Accounts', route: '/accounts' },
				// { ru: 'Кластеры', en: 'Clusters', route: '/locations' }
			],
			admin: [
				// { ru: 'Аккаунты', en: 'Accounts', route: '/accounts' },
				// { ru: 'Кластеры', en: 'Clusters', route: '/locations' }
			],
			billing: [
				// { ru: 'Аккаунты', en: 'Accounts', route: '/accounts' },
				// { ru: 'Кластеры', en: 'Clusters', route: '/locations' }
			],
		}),
	},
	projects: {
		title: "Manager",
		description: {
			en: "Swiftly create and manage projects, administrators, and resources in your account.",
			ru: "Быстро создавайте и управляйте проектами, администраторами и ресурсами в вашем аккаунте.",
		},
		img: Manager,
		url: {
			xby: "https://migrator.icdc.io/",
			zby: "https://migrator.icdc.io/",
			idc: "https://migrator.icdc.io/",
		},
		routes: () => ({
			member: [
				// { ru: 'Проекты', en: 'Projects', route: '/projects' },
				// { ru: 'Квоты', en: 'Quotas', route: '/quotas' }
			],
			admin: [
				// { ru: 'Проекты', en: 'Projects', route: '/projects' },
				// { ru: 'Квоты', en: 'Quotas', route: '/quotas' }
			],
			billing: [
				// { ru: 'Проекты', en: 'Projects', route: '/projects' },
				// { ru: 'Квоты', en: 'Quotas', route: '/quotas' }
			],
		}),
	},
	devops: {
		title: "Migrator",
		description: {
			en: "Easily customize CI/CD architecture for your DevOps projects.",
			ru: "Легко настраивайте CI/CD архитектуру для ваших DevOps проектов.",
		},
		img: Devops,
		url: {
			xby: "https://migrator.icdc.io/",
			zby: "https://migrator.icdc.io/",
			idc: "https://migrator.icdc.io/",
		},
		routes: () => ({
			member: [
				// { title: 'Каталог', route: '/catalog' }, { title: 'Ресурсы', route: '/resources' }
			],
			admin: [
				// { title: 'Каталог', route: '/catalog' }, { title: 'Ресурсы', route: '/resources' }
			],
			billing: [
				// { title: 'Каталог', route: '/catalog' }, { title: 'Ресурсы', route: '/resources' }
			],
		}),
	},
	openshift: {
		title: "Migrator",
		description: {
			en: "Manage users and allocate resources for your OpenShift projects.",
			ru: "Управляйте пользователями и распределяйте ресурсы для ваших OpenShift проектов.",
		},
		img: Openshift,
		url: {
			xby: "https://migrator.icdc.io/",
			zby: "https://migrator.icdc.io/",
			idc: "https://migrator.icdc.io/",
		},
		routes: (location: string) => ({
			member: [
				{
					ru: "Console",
					en: "Console",
					route: `https://openshift.${location === "idc" ? "iby" : location}.icdc.io/`,
				},
			],
			admin: [
				{
					ru: "Console",
					en: "Console",
					route: `https://openshift.${location === "idc" ? "iby" : location}.icdc.io/`,
				},
			],
			billing: [
				{
					ru: "Console",
					en: "Console",
					route: `https://openshift.${location === "idc" ? "iby" : location}.icdc.io/`,
				},
			],
		}),
	},
	account: {
		title: "Account Settings",
		description: {
			en: "Manage account settings, users, and locations.",
			ru: "Управляйте настройками аккаунта, пользователями и локациями.",
		},
		img: Accounts,
		url: {
			xby: "https://cloud.icdc.io/account",
			zby: "https://cloud.icdc.io/account",
			idc: "https://cloud.icdc.io/account",
		},
		routes: () => ({
			member: [
				//{ ru: 'Console', en: 'Console', route: `https://openshift.${location === 'idc' ? 'iby' : location}.icdc.io/` }
			],
			admin: [
				//{ ru: 'Console', en: 'Console', route: `https://openshift.${location === 'idc' ? 'iby' : location}.icdc.io/` }
			],
			billing: [
				//{ ru: 'Console', en: 'Console', route: `https://openshift.${location === 'idc' ? 'iby' : location}.icdc.io/` }
			],
		}),
	},
	billing: {
		title: "Billing",
		description: {
			en: "Managed invoices, reports and payments for all accounts.",
			ru: "Управляемые счета-фактуры, отчеты и платежи для всех аккаунтов.",
		},
		img: Billing,
		// url: {
		//     xby: 'https://cloud.icdc.io/billing',
		//     zby: 'https://cloud.icdc.io/billing',
		//     idc: 'https://cloud.icdc.io/billing',
		// },
		routes: () => ({
			member: [],
			admin: [],
			billing: [],
		}),
	},
	support: {
		title: "Support",
		description: {
			en: "Access documentation and request support with helpdesk.",
			ru: "Доступ к документации и запросы в службу поддержки.",
		},
		img: Support,
		// url: {
		//     xby: 'https://cloud.icdc.io/billing',
		//     zby: 'https://cloud.icdc.io/billing',
		//     idc: 'https://cloud.icdc.io/billing',
		// },
		routes: () => ({
			member: [],
			admin: [],
			billing: [],
		}),
	},
	"outrun-cloud": {
		title: "Outrun Cloud",
		description: {
			en: "Provides necessary resources for developing and deploying microservices applications.",
			ru: "Предоставляет необходимые ресурсы для разработки и развертывания микросервисных приложений.",
		},
		img: OutrunCloud,
		// url: {
		//     xby: 'https://cloud.icdc.io/billing',
		//     zby: 'https://cloud.icdc.io/billing',
		//     idc: 'https://cloud.icdc.io/billing',
		// },
		routes: () => ({
			member: [],
			admin: [],
			billing: [],
		}),
	},
	"outrun-dedicated": {
		title: "Outrun Dedicated",
		description: {
			en: "Outrun Dedicated",
			ru: "Outrun Dedicated",
		},
		img: OutrunDedicated,
		// url: {
		//     xby: 'https://cloud.icdc.io/billing',
		//     zby: 'https://cloud.icdc.io/billing',
		//     idc: 'https://cloud.icdc.io/billing',
		// },
		routes: () => ({
			member: [],
			admin: [],
			billing: [],
		}),
	},
	"outrun-service": {
		title: "Outrun Container Service",
		description: {
			en: "Outrun Container Service",
			ru: "Outrun Container Service",
		},
		img: OutrunContainerService,
		// url: {
		//     xby: 'https://cloud.icdc.io/billing',
		//     zby: 'https://cloud.icdc.io/billing',
		//     idc: 'https://cloud.icdc.io/billing',
		// },
		routes: () => ({
			member: [],
			admin: [],
			billing: [],
		}),
	},
	database: {
		title: "Database",
		description: {
			en: "A service that simplifies the setup, operation and scaling of databases in a cloud environment.",
			ru: "Сервис, упрощающий настройку, эксплуатацию и масштабирование баз данных в облачной среде.",
		},
		img: database,
		// url: {
		//     xby: 'https://cloud.icdc.io/billing',
		//     zby: 'https://cloud.icdc.io/billing',
		//     idc: 'https://cloud.icdc.io/billing',
		// },
		routes: () => ({
			member: [],
			admin: [],
			billing: [],
		}),
	},
	mq: {
		title: "Message Queue",
		description: {
			en: "A service that simplifies the setup, operation and scaling of message brokers in a cloud environment.",
			ru: "Сервис, упрощающий настройку, эксплуатацию и масштабирование брокеров сообщений в облачной среде.",
		},
		img: mq,
		// url: {
		//     xby: 'https://cloud.icdc.io/billing',
		//     zby: 'https://cloud.icdc.io/billing',
		//     idc: 'https://cloud.icdc.io/billing',
		// },
		routes: () => ({
			member: [],
			admin: [],
			billing: [],
		}),
	},
	telemetry: {
		title: "Telemetry",
		description: {
			en: "Track user and administrator actions across your infrastructure with notifications and alert settings for events and status changes.",
			ru: "Отслеживайте действия пользователей и администраторов в вашей инфраструктуре с уведомлениями и настройками оповещений для событий и изменений статуса.",
		},
		img: telemetry,
		// url: {
		//     xby: 'https://cloud.icdc.io/billing',
		//     zby: 'https://cloud.icdc.io/billing',
		//     idc: 'https://cloud.icdc.io/billing',
		// },
		routes: () => ({
			member: [],
			admin: [],
			billing: [],
		}),
	},
} as const;

export default services;
