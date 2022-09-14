<template>
	<a-menu v-if="app.info.menu.isGroup" />

	<div class="app-topbar">
		<div
			class="app-topbar__collapse"
			:class="{
				unfold: !app.isFold
			}"
			@click="app.fold()"
		>
			<el-icon><Fold /></el-icon>
		</div>

		<!-- 路由导航 -->
		<route-nav />

		<div class="flex1"></div>

		<!-- 工具栏 -->
		<ul class="app-topbar__tools">
			<li>
				<el-badge :value="81" class="item">
					<el-icon><BellFilled /></el-icon>
				</el-badge>
			</li>

			<li style="padding: 0 10px">
				<el-badge is-dot class="item">
					<el-icon><Setting /></el-icon>
				</el-badge>
				<el-switch
					style="margin-left: 15px"
					v-model="themeSwitch"
					inline-prompt
					:active-icon="Moon"
					:inactive-icon="Sunny"
				/>
			</li>
		</ul>

		<!-- 用户信息 -->
		<div class="app-topbar__user" v-if="user.info">
			<el-dropdown trigger="click" hide-on-click @command="onCommand">
				<span class="el-dropdown-link">
					<span class="name">{{ user.info.nickname }}</span>
					<img class="avatar" src="/vite.svg" />
				</span>

				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item command="my">
							<i class="cl-iconfont cl-icon-user"></i>
							<span>个人中心</span>
						</el-dropdown-item>
						<el-dropdown-item command="exit">
							<i class="cl-iconfont cl-icon-exit"></i>
							<span>退出</span>
						</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
</template>
<script lang="ts" name="topbar" setup>
import { ref } from 'vue';
import { useBase } from '/$/base';
import { Moon, Sunny } from '@element-plus/icons-vue';

const themeSwitch = ref('light');

const { app, user } = useBase();
user.set({
	id: 1,
	name: 'Nick',
	username: 'admin',
	nickname: '管理员',
});

function onCommand() {}
</script>
<style lang="scss" scoped>
.app-topbar {
	display: flex;
	align-items: center;
	height: 50px;
	padding: 0 10px;
	background-color: #fff;
	margin-bottom: 10px;

	&__collapse {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 40px;
		width: 40px;
		cursor: pointer;
		transform: rotateY(180deg);

		&.unfold {
			transform: rotateY(0);
		}

		i {
			font-size: 20px;
		}
	}

	.flex1 {
		flex: 1;
	}

	&__tools {
		display: flex;
		margin-right: 20px;

		& > li {
			display: flex;
			justify-content: center;
			align-items: center;
			list-style: none;
			height: 45px;
			min-width: 45px;
			border-radius: 3px;
			cursor: pointer;
			margin-left: 10px;

			&:hover {
				background-color: rgba(0, 0, 0, 0.1);
			}
		}
	}

	&__user {
		margin-right: 10px;
		cursor: pointer;

		.el-dropdown-link {
			display: flex;
			align-items: center;
		}

		.avatar {
			height: 32px;
			width: 32px;
			border-radius: 32px;
		}

		.name {
			white-space: nowrap;
			margin-right: 15px;
		}

		.el-icon-arrow-down {
			margin-left: 10px;
		}
	}
}
</style>
