import {ShadowCard} from 'components/Elements';
import {useRef, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import {scale, screenWidth} from 'theme/responsiveSize';
import {COLORS} from 'theme/theme';

const TextEditor: React.FC = () => {
  const richText = useRef() as React.MutableRefObject<RichEditor>;

  const [descHTML, setDescHTML] = useState('');
  const [showDescError, setShowDescError] = useState(false);

  console.log(descHTML)

  const richTextHandle = (descriptionText: any) => {
    if (descriptionText) {
      setShowDescError(false);
      setDescHTML(descriptionText);
    } else {
      setShowDescError(true);
      setDescHTML('');
    }
  };

  const submitContentHandle = () => {
    const replaceHTML = descHTML.replace(/<(.|\n)*?>/g, '').trim();
    const replaceWhiteSpace = replaceHTML.replace(/&nbsp;/g, '').trim();

    if (replaceWhiteSpace.length <= 0) {
      setShowDescError(true);
    } else {
      // send data to your server!
    }
  };

  return (
    
      <ShadowCard style={styles.richTextContainer}>
        <RichEditor
          ref={richText}
          onChange={richTextHandle}
          placeholder="Write your cool content here :)"
          style={styles.richTextEditorStyle}
          initialHeight={250}
        />
        <ShadowCard style={styles.richTextToolbarStyle}>
          <RichToolbar
            editor={richText}
            selectedIconTint="#873c1e"
            iconTint="#312921"
            actions={[
              actions.setBold,
              actions.setItalic,
              actions.setUnderline,
              actions.insertBulletsList,
            ]}
            style={{
              backgroundColor: '#fff',
              width: scale(235),
              height: scale(70),
              borderRadius: 35,
            }}
          />
        </ShadowCard>
      </ShadowCard>
     
  );
}

export default TextEditor;

const styles = StyleSheet.create({

  richTextContainer: {
    display: 'flex',
    flexDirection: 'column-reverse',
    // alignItems: 'center',
    width: screenWidth - scale(56),
    // minHeight: scale(296),
    borderRadius: scale(40),
    backgroundColor: COLORS.primaryBackground,
  },

  richTextEditorStyle: {
    // fontSize: 20,
    borderRadius: scale(40),
    paddingHorizontal: scale(20),
    paddingVertical: scale(40),
    backgroundColor: COLORS.primaryBackground,
  },

  richTextToolbarStyle: {
    backgroundColor: '#fff',
    width: scale(235),
    height: scale(70),
    borderRadius: 35,
    position: 'absolute',
    bottom: -scale(30),
    left: (screenWidth - scale(56) - scale(235)) / 2,
  },
});
