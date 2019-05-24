export function getCurrentAuthority() {
	return ['admin']
}

export function check(auth) {
	const currentAuth = getCurrentAuthority()
	return currentAuth.some(item => auth.includes(item))
}

export function isLogin() {
	const currentAuth = getCurrentAuthority()
	return currentAuth && currentAuth[0] !== 'guest'
}
