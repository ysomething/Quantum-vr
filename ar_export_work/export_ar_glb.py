import bpy

OUTPUT = r"D:\code\finally\quantum-entanglement-interactive-showcase\public\models\scene12_13_ar.glb"

scene = bpy.context.scene
scene.frame_start = 0
scene.frame_end = max(scene.frame_end, 491)
scene.frame_set(scene.frame_start)

print("AR_EXPORT_SOURCE", bpy.data.filepath)
print("AR_EXPORT_FRAME_RANGE", scene.frame_start, scene.frame_end)
print("AR_EXPORT_ACTIONS", len(bpy.data.actions))

kwargs = {
    "filepath": OUTPUT,
    "export_format": "GLB",
    "export_animations": True,
    "export_animation_mode": "ACTIONS",
    "export_frame_range": False,
    "export_bake_animation": True,
    "export_anim_slide_to_zero": True,
    "export_optimize_animation_size": False,
    "export_optimize_animation_keep_anim_object": True,
    "export_optimize_animation_keep_anim_armature": True,
    "export_yup": True,
    "export_apply": False,
    "export_materials": "EXPORT",
    "export_cameras": False,
    "export_lights": True,
}

available = bpy.ops.export_scene.gltf.get_rna_type().properties.keys()
safe_kwargs = {key: value for key, value in kwargs.items() if key in available}

bpy.ops.export_scene.gltf(**safe_kwargs)

print("AR_GLB_EXPORT_DONE", OUTPUT)
