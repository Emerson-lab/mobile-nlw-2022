import React, { useState } from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from "phosphor-react-native";
import * as ClipBoard from 'expo-clipboard';

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface Props extends ModalProps {
  discord: string;
  onClose: () => void
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  const [isCopy, setIsCopy] = useState(false);


  async function handleCopyDiscordUserToClipBoard() {
    setIsCopy(true);
    await ClipBoard.setStringAsync(discord);
    Alert.alert('Discord copiado!', 'Usuário copiado para você colar no Discord e encontrar essa pessoa!')
    setIsCopy(false);
  };
  
  return (
    <Modal
      animationType='fade'
      transparent
      statusBarTranslucent
      {...rest}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={onClose}
          >
            <MaterialIcons
              name='close'
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>
          <CheckCircle
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight='bold'
          />
          <Heading
            title='Let´s play'
            subtitle='Agora é só começar a jogar!'
            style={{ alignItems: 'center', marginTop: 24 }}
          />

          <Text style={styles.label}>
            Adicione seu discord
          </Text>
          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyDiscordUserToClipBoard}
            disabled={isCopy}
          >
            <Text style={styles.discord}>
              {isCopy ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : discord}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}