import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLString,
	GraphQLInt,
} from 'graphql'

export const ButtonType = new GraphQLObjectType({
	name: 'Button',
	fields: () => ({
		id: {type: GraphQLID},
		message: {type: GraphQLString},
		isActive: {type: GraphQLInt},
	}),
})

export const queries = {
	button: {
		type: ButtonType,
		args: {
			id: {type: new GraphQLNonNull(GraphQLID)},
		},
		resolve(parent, {id}, {db}) {
			return db.get('SELECT * FROM myTable WHERE id = $id', {$id: id})
		},
	},
}

export const mutations = {
	clickButton: {
		type: ButtonType,
		args: {
			id: {type: new GraphQLNonNull(GraphQLID)},
			isActive: {type: GraphQLInt},
		},
		resolve(parentValue, {id, isActive}, {db}) {
			db.run('UPDATE myTable SET isActive = $isActive WHERE id = $id', {
				$id: id,
				$isActive: isActive,
			})
		},
	},
}
