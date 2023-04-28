for(i = 0; i < nums.length;i++){
        if(nums[i] > nums[i + 1]){
            let temp = nums[i];
            nums[i] = nums[i + 1];
            nums[i + 1] = temp;
        }
    }