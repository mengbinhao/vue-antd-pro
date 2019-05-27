const currentAuth = ['admin']
export { currentAuth }

export function getCurrentAuthority() {
	return currentAuth
}

export function check(auth) {
	const currentAuth = getCurrentAuthority()
	return currentAuth.some(item => auth.includes(item))
}

export function isLogin() {
	const currentAuth = getCurrentAuthority()
	return currentAuth && currentAuth[0] !== 'guest'
}
