setBtnVisible(false);
        
        try {
            const userFirebase = await firebase.auth.signInWithEmailAndPassword(
                email,
                password
            );

            Alert.alert(
                'Bienvenido',
                `${userFirebase.user.email}`,
                [
                    {
                        text: 'Acceder',
                        onPress: () => {
                            setBtnVisible(true);
                            props.navigation.navigate(
                                'Principal'
                            );
                        },
                    },
                ]
            );
        } catch (e) {
            Alert.alert('ERROR', getError(e.code), [
                {
                    text: 'Volver a intentar',
                    onPress: () => {
                        setBtnVisible(true);
                    },
                },
            ]);
        }