<template>
	<div v-if="isLoading">
		<b-table-simple class="text-center" caption-top responsive>
			<caption class="bg-white h4 text-center mb-5">
				Пользователи в системе.
				<p class="h6">Количество: {{ count }}</p>
			</caption>
			<b-thead class="bg-white">
				<b-tr>
					<b-th>ID</b-th>
					<b-th colspan="2">Email</b-th>
				</b-tr>
			</b-thead>
			<b-tbody v-for="user in users" :key="user.id" class="text-light mb-5">
				<b-tr>
					<b-th rowspan="2">{{user.id}}</b-th>
				</b-tr>
				<b-tr>
					<b-th>{{ user.email }}</b-th>
				</b-tr>
			</b-tbody>
		</b-table-simple>
	</div>
	<b-alert v-else show variant="danger">
		{{ error ? users : 'Загружается' }}
	</b-alert>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
	mounted() {
		this.startUsers()
	},
	computed: {
		...mapState({
			users: state => state.user.users,
			count: state => state.user.count,
			isLoading: state => state.user.isLoading,
			error: state => state.user.error
		})
	},
	methods: {
		...mapActions( "user", [ "startUsers" ] ),
	}
}
</script>

<style>
.bg-white {
	background: #fff;
}
</style>