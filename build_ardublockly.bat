cd blockly\
py -2 i18n\js_to_json.py --input_file  msg\messages.js --output_dir msg\json\
py -2 i18n\create_messages.py --source_lang_file msg\json\en.json --source_synonym_file msg\json\synonyms.json --key_file msg\json\keys.json --output_dir msg\js\  msg\json\en.json msg\json\fr.json
cd ..
py -3 start.py
PAUSE
