export const selectListByWindowWidth = (
	windowWidth,
	userDesktopNavigation,
	userTabletNavigation
) => {
	if (windowWidth >= 1014) {
		return userDesktopNavigation
	} else if (windowWidth > 755 && windowWidth < 1014) {
		return userTabletNavigation
	} else {
		return []
	}
}
