export const v0Template = {
	node_id: "MAGIC-FLOW-NODE-673ede13a66158-95939988",
	debug: false,
	name: "人员检索",
	description: "",
	node_type: 28,
	meta: [],
	params: {
		filter_type: "all",
		filters: [],
	},
	next_nodes: [],
	input: null,
	output: {
		widget: null,
		form: {
			id: "component-673ede13a6648",
			version: "1",
			type: "form",
			structure: {
				type: "object",
				key: "root",
				sort: 0,
				title: "",
				description: "desc",
				required: null,
				value: null,
				encryption: false,
				encryption_value: null,
				items: null,
				properties: {
					users: {
						type: "array",
						key: "users",
						sort: 0,
						title: "用户数据",
						description: "",
						required: null,
						value: null,
						encryption: false,
						encryption_value: null,
						items: {
							type: "object",
							key: "array",
							sort: 0,
							title: "用户数据",
							description: "",
							required: ["user_id", "username", "position", "phone", "work_number"],
							value: null,
							encryption: false,
							encryption_value: null,
							items: null,
							properties: {
								user_id: {
									type: "string",
									key: "user_id",
									sort: 0,
									title: "用户 ID",
									description: "",
									required: null,
									value: null,
									encryption: false,
									encryption_value: null,
									items: null,
									properties: null,
								},
								username: {
									type: "string",
									key: "username",
									sort: 1,
									title: "姓名",
									description: "",
									required: null,
									value: null,
									encryption: false,
									encryption_value: null,
									items: null,
									properties: null,
								},
								position: {
									type: "string",
									key: "position",
									sort: 2,
									title: "岗位",
									description: "",
									required: null,
									value: null,
									encryption: false,
									encryption_value: null,
									items: null,
									properties: null,
								},
								phone: {
									type: "string",
									key: "phone",
									sort: 3,
									title: "手机号码",
									description: "",
									required: null,
									value: null,
									encryption: false,
									encryption_value: null,
									items: null,
									properties: null,
								},
								work_number: {
									type: "string",
									key: "work_number",
									sort: 4,
									title: "工号",
									description: "",
									required: null,
									value: null,
									encryption: false,
									encryption_value: null,
									items: null,
									properties: null,
								},
								department: {
									type: "object",
									key: "department",
									sort: 5,
									title: "部门",
									description: "",
									required: ["id", "name", "path"],
									value: null,
									encryption: false,
									encryption_value: null,
									items: null,
									properties: {
										id: {
											type: "string",
											key: "id",
											sort: 0,
											title: "部门 ID",
											description: "",
											required: null,
											value: null,
											encryption: false,
											encryption_value: null,
											items: null,
											properties: null,
										},
										name: {
											type: "string",
											key: "name",
											sort: 1,
											title: "部门名称",
											description: "",
											required: null,
											value: null,
											encryption: false,
											encryption_value: null,
											items: null,
											properties: null,
										},
										path: {
											type: "string",
											key: "path",
											sort: 2,
											title: "部门路径",
											description: "",
											required: null,
											value: null,
											encryption: false,
											encryption_value: null,
											items: null,
											properties: null,
										},
									},
								},
							},
						},
						properties: null,
					},
				},
			},
		},
	},
	system_output: null,
}
