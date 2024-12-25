import type { StrapiApp } from "@strapi/strapi/admin";

export default {
  config: {
    tutorials: false,
    locales: [],
  },
  bootstrap(app: StrapiApp) {
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    head.appendChild(style);
    style.appendChild(document.createTextNode(`.cropper-container,.cropper-view-box{height:100%;width:100%;display:block}.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;touch-action:none;-webkit-touch-callout:none;user-select:none;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{outline:rgba(51,153,255,.75) solid 1px;overflow:hidden}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute;border-top-width:1px;height:calc(100% / 3);left:0;top:calc(100% / 3);width:100%}&.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:calc(100% / 3);top:0;width:calc(100% / 3)}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f;right:-3px;top:0;width:5px}&.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}&.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}&.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}&.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}&.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}&.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}&.point-ne{cursor:nesw-resize;right:-3px;top:-3px}&.point-nw{cursor:nwse-resize;left:-3px;top:-3px}&.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}&.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:15px}.cropper-bg{background-image:url('../images/bg.png')}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}`));
  },
  register(app: StrapiApp) {
    const indexRoute = app.router.routes.find(({ index }) => index)
    if (!indexRoute) throw new Error("unable to find index page")
    indexRoute.lazy = async () => {
      const { Homepage } = await import("./Homepage")
      return { Component: Homepage }
    }
  },
}
