import { ImageInsert } from "@ckeditor/ckeditor5-image";

export const editorConfiguration = {
  plugins: [ImageInsert],
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "underline",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "outdent",
      "indent",
      "|",
      "insertImage",
      "imageUpload",
      "blockQuote",
      "mediaEmbed",
      "insertTable",
      "|",
      "fontColor",
      "fontFamily",
      "|",
      "undo",
      "redo",
    ],
  },
  language: "fr",
  image: {
    toolbar: [
      "imageTextAlternative",
      "toggleImageCaption",
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
    ],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableCellProperties",
    ],
  },
};
