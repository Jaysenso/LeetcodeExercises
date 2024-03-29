class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int index = nums1.length - nums2.length;
        int temp;
        for(int i = 0; i < nums2.length; i++){
            nums1[index++] = nums2[i];     
        } 
        //insertion sort (or we can use Arrays.sort too)
        for(int i = 0; i < nums1.length; i++){
            for(int j = i; j > 0; j--){
                if(nums1[j] < nums1[j-1]){
                    temp = nums1[j];
                    nums1[j] = nums1[j-1];
                    nums1[j-1] = temp;
                }
            }
        }
    }
}
