export const handlePush = nav => global.navRef.navigate(nav.name, nav.params);

export const handlePushToPage = nav => global.navRef.push(nav.name, nav.params);

export const handleSetRoot = nav => global.navRef.reset({ index: 0, routes: [{ name: nav.name }] })

export const handleGoBack = nav => global.navRef.goBack();

export const handlePop = nav => global.navRef.popToTop();