"use client";

import React from 'react';
import { Pane, Heading, Text, Menu, IconButton, SideSheet } from 'evergreen-ui';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(true);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <Pane padding={16}>
            <Pane display="flex" alignItems="center" marginBottom={16}>
                <IconButton
                    icon="menu"
                    appearance="minimal"
                    height={24}
                    onClick={handleMenuClick}
                />
                <Heading size={600} marginLeft={8}>
                    Your Website
                </Heading>
            </Pane>
            <Pane>{children}</Pane>
            <SideSheet
                isShown={isMenuOpen}
                onCloseComplete={handleMenuClose}
                containerProps={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Menu>
                    <Menu.Group>
                        <Menu.Item>New</Menu.Item>
                        <Menu.Item>Open</Menu.Item>
                        <Menu.Item>Save</Menu.Item>
                    </Menu.Group>
                    <Menu.Divider />
                    <Menu.Group>
                        <Menu.Item>Settings</Menu.Item>
                        <Menu.Item>Help</Menu.Item>
                    </Menu.Group>
                </Menu>
            </SideSheet>
        </Pane>
    );
};

export default Layout;
