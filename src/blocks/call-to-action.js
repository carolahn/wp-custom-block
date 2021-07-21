import { registerBlockType } from "@wordpress/blocks";
import {
  RichText,
  InnerBlocks,
  ColorPalette,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
const ALLOWED_BLOCKS = ["core/button"];

registerBlockType("wp-custom-block/call-to-action", {
  title: "Call to Action",
  icon: "admin-comments",
  category: "common",
  keywords: ["cta", "call to action"],
  attributes: {
    title: {
      type: "string",
      source: "html",
      selector: "h2",
    },
    titleColor: {
      type: "string",
      default: "#111",
    },
    content: {
      type: "string",
      source: "html",
      selector: "p",
    },
    contentColor: {
      type: "string",
      default: "#333",
    },
    wrapperBgColor: {
      type: "string",
      default: "#f1f2f2",
    },
  },
  /**
   * Edit Function
   */
  edit: ({ attributes, setAttributes }) => {
    const {
      title,
      content,
      wrapperBgColor,
      titleColor,
      contentColor,
    } = attributes;

    /**
     * Set Title
     */
    function setTitle(value) {
      setAttributes({ title: value });
    }

    /**
     * Set Content
     */
    function setContent(value) {
      setAttributes({ content: value });
    }

    /**
     * Set Wrapper Bg Color
     */
    function setWrapperBgColor(value) {
      setAttributes({ wrapperBgColor: value });
    }

    function setTitleColor(value) {
      setAttributes({ titleColor: value });
    }

    function setContentColor(value) {
      setAttributes({ contentColor: value });
    }

    return [
      <>
        <InspectorControls>
          <PanelBody title={"General Settings"} initialOpen={false}>
            <p>
              <strong>Background Color:</strong>
            </p>
            <ColorPalette value={wrapperBgColor} onChange={setWrapperBgColor} />
          </PanelBody>
          <PanelBody title={"Color Settings"} initialOpen={false}>
            <p>
              <strong>Title Color:</strong>
            </p>
            <ColorPalette value={titleColor} onChange={setTitleColor} />
            <p>
              <strong>Content Color:</strong>
            </p>
            <ColorPalette value={contentColor} onChange={setContentColor} />
          </PanelBody>
        </InspectorControls>
      </>,
      <>
        <div class="call-to-action" style={{ backgroundColor: wrapperBgColor }}>
          <RichText
            key="editable"
            tagName="h2"
            placeholder="Iconbox Title"
            value={title}
            onChange={setTitle}
            style={{ color: titleColor }}
          />

          <RichText
            key="editable"
            tagName="p"
            placeholder="Iconbox content goes here...."
            value={content}
            onChange={setContent}
            style={{ color: contentColor }}
          />
          <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
        </div>
      </>,
    ];
    // return "HELLO";
  },
  /**
   * Save Function
   */
  save: ({ attributes }) => {
    const {
      title,
      content,
      wrapperBgColor,
      titleColor,
      contentColor,
    } = attributes;

    return (
      <>
        <div class="call-to-action" style={{ backgroundColor: wrapperBgColor }}>
          <h2 style={{ color: titleColor }}>{title}</h2>
          <RichText.Content
            value={content}
            tagName="p"
            style={{ color: contentColor }}
          />
          <InnerBlocks.Content />
        </div>
      </>
    );
  },
});
